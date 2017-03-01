var hotkeys = require('protractor-hotkeys');
var chai = require('chai');
var expect = chai.expect;

describe('ng-2048 Game', function() {

    it('get to the ng gaming page', function() {
        browser.driver.get('http://ng2048.github.io/');
    });

    it('should get hit on the new game button', function() {
//        $('[ng-click="ctrl.newGame()"]').click();
        hotkeys.trigger('up');
    });

    it('should validate the next move', function () {
        checkGridStatus().then(function(result) {
            if (result) {
                hotkeys.trigger('left');
                returningRows().then(function(newArray) {
                    expect(newArray).to.contains('4');
                });
            } else {
                expect(result).to.equal(0);
            }
        });
    });
});


function checkGridStatus () {
    return returningRows().then(function (numbers) {
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] !== '') {
                var after;
                after = numbers[i+1];
                if (after !== '') {
                    return (Number(numbers[i]) + Number(after));
                } else {
                    return 0;
                }
            }
        }
    });
}

function returningRows() {
    return element.all(by.repeater('tile in ngModel.tiles track by $id(tile.id || $index)')).then(function (arr) {
        return Promise.all(arr.map(val => val.getText()));
    });
}







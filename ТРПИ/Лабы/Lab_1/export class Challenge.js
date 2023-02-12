"use strict";
exports.__esModule = true;
exports.Challenge = void 0;
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        var sum = 0;
        if (number <= 0 || number == null)
            return 0;
        for (var index = 0; index < number; index++) {
            if (index % 5 == 0 || index % 3 == 0) {
                sum += index;
            }
        }
        return sum;
    };
    return Challenge;
}());
exports.Challenge = Challenge;

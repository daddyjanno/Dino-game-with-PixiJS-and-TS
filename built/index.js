"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GreaterService = /** @class */ (function () {
    function GreaterService() {
    }
    GreaterService.prototype.great = function (person) {
        console.log("Hi ".concat(person.firstname, " ").concat(person.lastname));
    };
    return GreaterService;
}());
var person = {
    firstname: 'J-N',
    lastname: 'Drugmand',
};
new GreaterService().great(person);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var university_1 = require("./university");
var App = /** @class */ (function () {
    function App() {
    }
    App.run = function () {
        var university = new university_1.University("MUM", "CS");
        university.graduation(2019);
    };
    return App;
}());
exports.App = App;
App.run();

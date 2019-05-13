"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Graduation() {
    return function (target) {
        target.prototype.graduation = function (year) {
            console.log("Graduating " + this.dept + " " + year + " students");
        };
    };
}
exports.Graduation = Graduation;

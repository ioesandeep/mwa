export function Graduation() {
    return function (target: Function) {
        target.prototype.graduation = function (year: number) {
            console.log(`Graduating ${this.dept} ${year} students`);
        };
    }
}

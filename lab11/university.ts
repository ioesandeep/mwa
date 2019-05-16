import {UniversityI} from "./university.i";
import {Graduation} from "./graduation";

@Graduation()
export class University implements UniversityI {
    constructor(public name: string, public dept: string) {
    }
}

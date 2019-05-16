import {University} from "./university";
import {UniversityI} from "./university.i";

export class App {
    public static run(): void {
        const university: UniversityI = new University("MUM", "CS");
        university.graduation(2019);
    }
}

App.run();

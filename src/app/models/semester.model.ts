import { Course } from './course.model';

export class Semester {
    year: number;
    session: string;
    courses: Course[];

    constructor(json: any) {
        if (json.year) this.year = json.year;
        if (json.session) this.session = json.session;
        if (json.courses) this.courses = json.courses;

    }

    get hours() {
        let hours = 0;
        this.courses.forEach((course) => {
            hours += course.hours;
        });
        return hours;
    }
}
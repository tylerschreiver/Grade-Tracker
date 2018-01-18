
export class Grade {
    name: string;
    totalPoints: number;
    pointsEarned: number; // null signifies that the assignment is incomplete and is not counted in grade calculation

    constructor(json: any) {
        if (json.name) this.name = json.name;
        if (json.totalPoints) this.totalPoints = json.totalPoints;
        if (json.pointsEarned) this.pointsEarned = json.pointsEarned;        
    }
}
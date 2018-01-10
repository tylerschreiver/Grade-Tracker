
export class Grade {
    name: string;
    totalPoints: number;
    pointsEarned: number;

    constructor(json: any) {
        if (json.name) this.name = json.name;
        if (json.totalPoints) this.totalPoints = json.totalPoints;
        if (json.pointsEarned) this.pointsEarned = json.pointsEarned;        
    }
}
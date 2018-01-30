export class Codification {
    date: Date;
    position: number;
    id: string;
    etudiantId?: string;
    chambreId?: string;

    constructor(data:any)
    {
        this.chambreId = data.chambreId;
        this.etudiantId = data.etudiantId;
        this.date = data.date;
        this.position = data.position;
    }
}
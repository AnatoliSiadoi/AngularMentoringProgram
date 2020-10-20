import { ICourse } from './../Interfaces/icourse';
export class Course implements ICourse {
    id?: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
  
    constructor(id: number, title: string, creationDate: Date, duration: number, description: string ) {
        this.creationDate = creationDate;
        this.description = description;
        this.duration = duration;
        this.id = id;
        this.title = title;    
    }
}

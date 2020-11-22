import { ICourse } from './../Interfaces/icourse';
export class Course implements ICourse {
    id?: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated: boolean;
  
    constructor(id?: number, title?: string, creationDate?: Date, duration?: number, description?: string, topRated?: boolean) {
        this.creationDate = creationDate;
        this.description = description;
        this.duration = duration;
        this.id = id;
        this.title = title;    
        this.topRated = topRated;  
    }
}

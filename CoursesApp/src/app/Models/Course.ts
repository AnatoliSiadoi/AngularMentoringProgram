import { ICourse, IAuthor } from './../Interfaces/icourse';
export class Course implements ICourse {
    id?: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated: boolean;
    authors?: IAuthor;
  
    constructor(id?: number, title?: string, creationDate?: Date, duration?: number, description?: string, topRated?: boolean, authors?: IAuthor) {
        this.creationDate = creationDate;
        this.description = description;
        this.duration = duration;
        this.id = id;
        this.title = title;    
        this.topRated = topRated;  
        this.authors = authors;  
    }
}

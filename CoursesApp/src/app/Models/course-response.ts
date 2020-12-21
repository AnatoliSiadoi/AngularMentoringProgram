import { ICourseResponse } from './../Interfaces/icourse-response';
export class CourseResponse implements ICourseResponse {
    id?: number;
    name?: string;
    date?: string;
    length?: number;
    description?: string;
    authors?: {
        id?: number;
        name?: string;
    };
    isTopRated: boolean;

    constructor(id?: number, name?: string, date?: string, length?: number,
         description?: string, authorsId?: number, authorsName?: string, isTopRated?: boolean) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.length = length;
        this.description =  description;
        this.authors.id = authorsId;
        this.authors.name = authorsName;
        this.isTopRated = isTopRated;  
    }
}

namespace Models {
    export class Course implements Interfaces.ICourse {
        id?: string;
        title: string;
        creationDate: Date;
        duration: number;
        description: string;
  
        constructor(id: string, title: string, creationDate: Date, duration: number, description: string ) {
            this.creationDate = creationDate;
            this.description = description;
            this.duration = duration;
            this.id = id;
            this.title = title;
        }
    }
}
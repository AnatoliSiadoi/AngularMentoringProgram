export interface ICourse {
    id?: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated?: boolean;
    authors?: IAuthor[];
}

export interface IAuthor {
    id: string;
    name: string;
}

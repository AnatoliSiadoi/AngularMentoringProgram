import { IAuthor } from "./icourse";

export interface ICourseResponse {
    id?: number;
    name?: string;
    date?: string;
    length?: number;
    description?: string;
    authors?: IAuthor[];
    isTopRated?: boolean;
}


import { IUser } from './../Interfaces/iuser';
export class User implements IUser  {
    id?: string;
    firstName: string;
    lastName: string;
  
    constructor(id: string, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }    
}

import { IUser } from './../Interfaces/iuser';
export class User implements IUser  {
    id?: number;
    firstName: string;
    lastName: string;
    login: string;
    password: string;
  
    constructor(id: number, firstName: string, lastName: string,
         login: string,password: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.login = login;
        this.password = password;
    }    
}

import { IUserInfoResponse } from '../Interfaces/iuser-info-response';
export class UserInfoResponse implements IUserInfoResponse {
    id: number;
    token: string;
    name: {
        first: string,
        last: string
    };
    login: string;
    password: string;

    constructor(id: number, first: string, last: string,
        login: string,password: string, token: string) {
       this.id = id;
       this.name.first = first;
       this.name.last = last;
       this.login = login;
       this.password = password;
       this.token = token;
   }    
}

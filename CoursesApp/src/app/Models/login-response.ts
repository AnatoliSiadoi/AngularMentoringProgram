import { ILoginResponse } from './../Interfaces/ilogin-response';
export class LoginResponse implements ILoginResponse {
    token: string;

    constructor(token: string) {
       this.token = token;
   } 
}

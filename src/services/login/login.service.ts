import { Injectable } from '@angular/core';
import { LoginRequest } from 'src/requests/request/login.request';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public loginRequest: LoginRequest) { }

  login(formValue: any) :Promise<any>{
    return this.loginRequest.request();
  }
}

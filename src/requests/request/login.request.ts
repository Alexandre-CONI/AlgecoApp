import { AbstractRequest } from '../abstart.request';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginRequest extends AbstractRequest {

    constructor() { super() }

    public request() :Promise<any> {
      let APIDest: String = "";
      return this.callServer(APIDest, {})
        .then(data => {

        })
        .catch(error => {
          
        });
    }
}
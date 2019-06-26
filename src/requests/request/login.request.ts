import { AbstractRequest } from '../abstart.request';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginRequest extends AbstractRequest {

    constructor() { super() }

    public request() :Promise<any> {
        return this.callServer()
        .then(data => {

        })
        .catch(error => {

        });
    }
}
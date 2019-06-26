import { Injectable } from '@angular/core';
import { AbstractRequest } from '../abstart.request';

@Injectable({
  providedIn: 'root'
})

export class GetDeviceDataRequest extends AbstractRequest {

    constructor() { super() }

    request(): Promise<any> {
        return this.callServer()
            .then(data => {

            })
            .catch(error => {

            });
    }
}
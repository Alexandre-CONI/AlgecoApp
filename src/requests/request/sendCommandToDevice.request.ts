import { AbstractRequest } from '../abstart.request';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SendCommandToDeviceRequest extends AbstractRequest  {

    constructor() { super() }

    request(): Promise<any> {
        return this.callServer()
            .then(data => {

            })
            .catch(error => {

            });
    }
}
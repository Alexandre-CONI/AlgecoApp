import { AbstractRequest } from '../abstart.request';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SendCommandToDeviceRequest extends AbstractRequest  {

    constructor() { super() }

    request(): Promise<any> {
        let APIDest: String = "";
        return this.callServer(APIDest, {})
            .then(data => {

            })
            .catch(error => {

            });
    }
}
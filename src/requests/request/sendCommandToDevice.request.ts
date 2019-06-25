import { AbstractRequest } from '../abstart.request';

export class SendCommandToDeviceRequest extends AbstractRequest  {

    constructor( ) {super() }

    request(): Promise<any> {
        return this.callServer()
            .then(data => {

            })
            .catch(error => {

            });
    }
}
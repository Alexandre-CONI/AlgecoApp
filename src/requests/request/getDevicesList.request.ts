import { AbstractRequest } from '../abstart.request';

export class GetDevicesListRequest extends AbstractRequest {

    constructor() { super() }

    request(): Promise<any> {
        return this.callServer()
            .then(data => {

            })
            .catch(error => {

            });
    }
}
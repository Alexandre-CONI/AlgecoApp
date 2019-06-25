import { AbstractRequest } from '../abstart.request';

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
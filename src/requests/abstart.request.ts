import { HTTP } from '@ionic-native/http/ngx';

export class AbstractRequest {

    private http: HTTP;

    constructor() { }

    protected callServer(): Promise<any> {
       return this.http.get('http://ionic.io', {}, {})
            .then(data => {

                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);
                return data;
            })
            .catch(error => {

                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
                return error
            });
    }
}
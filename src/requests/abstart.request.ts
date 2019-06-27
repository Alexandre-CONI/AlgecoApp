import { HTTP } from '@ionic-native/http/ngx';
import { Injectable } from '@angular/core';
import { APIMobileEndPoint } from 'src/const/constVar';

@Injectable({
    providedIn: 'root'
})



export class AbstractRequest {
    http: HTTP;

    constructor() {
        this.http = new HTTP();
     }

    public callServer(APIDest: String , param: {}): Promise<any> {    
        console.log(APIMobileEndPoint + APIDest);
        return this.http.get(APIMobileEndPoint + APIDest, {}, {})
            .then(data => {
                
                return JSON.parse(data.data);
            })
            .catch(error => {
                console.log(error);
                return error
            });
    }
}
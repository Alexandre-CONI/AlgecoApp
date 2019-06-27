import { Injectable } from '@angular/core';
import { AbstractRequest } from '../abstart.request';
import { Metrics } from 'src/models/metrics.model';

@Injectable({
  providedIn: 'root'
})

export class GetDeviceDataRequest extends AbstractRequest {

    constructor() { super() }

    responce : any = [
      {
        value:1,
        date: new Date(2019, 6, 26, 7)
      },
      {
        value: 50,
        date: new Date(2019, 6, 26, 8)
      },
      {
        value: 56,
        date: new Date(2019, 6, 26, 9)
      },
      {
        value: 58,
        date: new Date(2019, 6, 26, 10)
      },
      {
        value: 25,
        date: new Date(2019, 6, 26, 11)
      },
      {
        value: 105,
        date: new Date(2019, 6, 26, 12)
      },
      {
        value: 45,
        date: new Date(2019, 6, 26, 13)
      },
      {
        value: 87,
        date: new Date(2019, 6, 26, 14)
      },
      {
        value: 44,
        date: new Date(2019, 6, 26, 15)
      },
      {
        value: 98,
        date: new Date(2019, 6, 26, 16)
      },
      {
        value: 85,
        date: new Date(2019, 6, 26, 17)
      },
      {
        value: 120,
        date: new Date(2019, 6, 26, 18)
      },
      {
        value: 75,
        date: new Date(2019, 6, 26, 19)
      },
      {
        value: 45,
        date: new Date(2019, 6, 26, 20)
      }
    ]

    deviceData: Array<Metrics>;

  request(deviceID: number): Promise<any> {
      let APIDest: String = "metric/" + deviceID + "/datas";
      return this.callServer(APIDest, {})
            .then(data => {
              this.deviceData = [];
              data.forEach(res => {
                let mMetric: Metrics = Metrics.mapperMetrics(res);
                this.deviceData.push(mMetric);
              });
              return this.deviceData;
            })
            .catch(error => {

            });
    }
}
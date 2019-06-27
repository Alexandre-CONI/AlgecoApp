import { Injectable } from '@angular/core';
import { GetDeviceDataRequest } from '../../requests/request/getDeviceData.request';

@Injectable({
  providedIn: 'root'
})
export class DeviceDataService {

  constructor(private getDeviceDataRequest: GetDeviceDataRequest) { }

  getDeviceData(ID: number): Promise<any> {
    return this.getDeviceDataRequest.request(ID);
  }
}

import { Injectable } from '@angular/core';
import { GetDevicesListRequest } from '../../requests/request/getDevicesList.request'
import { SendCommandToDeviceRequest } from 'src/requests/request/sendCommandToDevice.request';

@Injectable({
  providedIn: 'root'
})
export class DevicesListService {

  constructor(private getDevicesListRequest: GetDevicesListRequest,
              private sendCommandToDeviceRequest: SendCommandToDeviceRequest) { }

  getDevicesList(): Promise<any> {
    return this.getDevicesListRequest.request(1);
  }

  sendCommand(): Promise<any> {
    return this.sendCommandToDeviceRequest.request();
  }
}

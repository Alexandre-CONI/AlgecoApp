import { Injectable } from '@angular/core';
import { AbstractRequest } from '../abstart.request';
import { DeviceType, Device } from 'src/models/device.model';

@Injectable({
  providedIn: 'root'
})

export class GetDevicesListRequest extends AbstractRequest {

  responce: any = [
    {
      deviceID: "PORIT687",
      name: "Banana farm bright sensor",
      type: DeviceType.BRIGHT
    }, {
      deviceID: "PORIT688r",
      name: "Banana farm humidity sensor",
      type: DeviceType.HUMIDITY
    }, {
      deviceID: "PORIT689",
      name: "Ape sound level",
      type: DeviceType.SOUND_LEVEL
    }, {
      deviceID: "PORIT690r",
      name: "Ape CO2",
      type: DeviceType.CO2
    }, {
      deviceID: "PORIT691r",
      name: "Ape pressure",
      type: DeviceType.PRESSURE
    }, {
      deviceID: "PORIT692",
      name: "Ape temperature",
      type: DeviceType.TEMPERATURE
    }
  ];

    constructor() { super() }
    deviceList: Array<Device>;

    request(userID: number = 1): Promise<any> {
      let APIDest: String = "device/"+ userID + "/user";
      return this.callServer(APIDest, {})
            .then(data => {
              this.deviceList = [];
              data.forEach(res => {
                let mDevice: Device = Device.mapperDevice(res);
                this.deviceList.push(mDevice);
              });
              return this.deviceList;
            })
            .catch(error => {

            });
    }
}
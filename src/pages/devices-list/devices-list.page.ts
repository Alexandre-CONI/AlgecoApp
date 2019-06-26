import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevicesListService } from 'src/services/devicesList/devices-list.service';
import { abstractPage, ToastType } from '../abstractPage';
import { ToastController, LoadingController } from '@ionic/angular';
import { Device, DeviceType } from 'src/models/device.model';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.page.html',
  styleUrls: ['./devices-list.page.scss'],
})
export class DevicesListPage extends abstractPage implements OnInit {

  constructor(public toastController: ToastController,
              public loadingController: LoadingController,
              private router: Router,
              private devicesListService: DevicesListService)
  { super(toastController,loadingController) }

  public devicesList: Array<Device> = [
    {
      "deviceID": "PORIT687",
      "name": "Banana farm bright sensor",
      "type" : DeviceType.BRIGHT
    }, {
      "deviceID": "PORIT688r",
      "name": "Banana farm humidity sensor",
      "type": DeviceType.HUMIDITY
    },{
      "deviceID": "PORIT689",
      "name": "Ape sound level",
      "type": DeviceType.SOUND_LEVEL
    }, {
      "deviceID": "PORIT690r",
      "name": "Ape CO2",
      "type": DeviceType.CO2
    }, {
      "deviceID": "PORIT691r",
      "name": "Ape pressure",
      "type": DeviceType.PRESSURE
    }, {
      "deviceID": "PORIT692",
      "name": "Ape temperature",
      "type": DeviceType.TEMPERATURE
    }
  ];

  ngOnInit() {
    this.LoadingSpinner().then(() => {
      this.devicesListService.getDevicesList()
        .then(data => {
          //this.devicesList = data;
        })
        .catch(error =>{
          this.Toast("The server seems busy, try again later", ToastType.DANGER);
        })
    })
  }
  

  onClickDevice(deviceID){
    this.router.navigateByUrl('device-data/' + deviceID);
  }

  onClickDeviceAction(deviceID){
    this.devicesListService.sendCommand()
      .then(data => {
        this.Toast("Command work", ToastType.SUCCESS);
      })
      .catch(error => {
        this.Toast("Command didn't work", ToastType.DANGER);
      });
  }

}

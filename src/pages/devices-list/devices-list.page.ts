import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevicesListService } from 'src/services/devicesList/devices-list.service';
import { abstractPage, ToastType } from '../abstractPage';
import { ToastController, LoadingController } from '@ionic/angular';
import { Device, DeviceType } from 'src/models/device.model';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.page.html',
  styleUrls: ['./devices-list.page.scss'],
})
export class DevicesListPage extends abstractPage implements OnInit {
  
  typeDeviceSelect: FormControl;
  devicesList: Array<Device>;

  constructor(public toastController: ToastController,
              public loadingController: LoadingController,
              private router: Router,
              private devicesListService: DevicesListService)
  
  {
    super(toastController,loadingController);
    this.typeDeviceSelect = new FormControl();

  }



  ngOnInit() {
    this.LoadingSpinner().then(() => {
      this.devicesListService.getDevicesList()
        .then(data => {
          this.devicesList = data;
        })
        .catch(error =>{
          this.Toast("The server seems busy, try again later", ToastType.DANGER);
        })
    })
  }
  

  onClickDevice(device : Device){
    this.router.navigate(['device-data/'], {
      queryParams: device,
    });
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

  logOut(){
    this.router.navigateByUrl('login');
  }

}

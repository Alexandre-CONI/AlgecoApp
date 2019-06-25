import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevicesListService } from 'src/services/devicesList/devices-list.service';
import { abstractPage, ToastType } from '../abstractPage';
import { ToastController, LoadingController } from '@ionic/angular';

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

  ngOnInit() {
    this.devicesListService.getDevicesList()
    .then(data =>{
      if (!data) Promise.reject(data);
    })
    .catch(error =>{

    })
  }

  onClickDevice(deviceID){
    this.router.navigateByUrl('device-data/' + deviceID);
  }

  onClickDeviceAction(){
    this.devicesListService.sendCommand()
      .then(data => {
        this.Toast("Command work", ToastType.SUCCESS);
      })
      .catch(error => {
        this.Toast("Command didn't work", ToastType.DANGER);
      });
  }

}

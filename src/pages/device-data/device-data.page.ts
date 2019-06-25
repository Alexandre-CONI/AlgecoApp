import { Component, OnInit } from '@angular/core';
import { abstractPage, ToastType } from '../abstractPage';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DeviceDataService } from 'src/services/deviceData/device-data.service';

@Component({
  selector: 'app-device-data',
  templateUrl: './device-data.page.html',
  styleUrls: ['./device-data.page.scss'],
})
export class DeviceDataPage extends abstractPage implements OnInit {

  constructor(public toastController: ToastController,
              public loadingController: LoadingController,
              private router: Router,
              public deviceDataService: DeviceDataService) 
  { super(toastController, loadingController) }

  ngOnInit() {
    this.deviceDataService.getDeviceData()
    .then(data => {

    })
    .catch(error => {
      this.Toast("The server seems busy, please try again later", ToastType.DANGER);
    })
  }

}

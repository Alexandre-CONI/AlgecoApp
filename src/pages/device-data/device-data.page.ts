import { Component, OnInit } from '@angular/core';
import { abstractPage } from '../abstractPage';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-data',
  templateUrl: './device-data.page.html',
  styleUrls: ['./device-data.page.scss'],
})
export class DeviceDataPage extends abstractPage implements OnInit {

  constructor(public toastController: ToastController,
              public loadingController: LoadingController,
              private router: Router,) 
  { super(toastController, loadingController) }

  ngOnInit() {
  }

}

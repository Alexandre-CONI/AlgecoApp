import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';

import { IonicModule } from '@ionic/angular';

import { DeviceDataPage } from './device-data.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceDataPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxEchartsModule,
  ],
  declarations: [DeviceDataPage]
})
export class DeviceDataPageModule {}

import { Component, OnInit } from '@angular/core';
import { abstractPage, ToastType } from '../abstractPage';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { DeviceDataService } from 'src/services/deviceData/device-data.service';
import { Device } from 'src/models/device.model';
import { Metrics } from 'src/models/metrics.model';

@Component({
  selector: 'app-device-data',
  templateUrl: './device-data.page.html',
  styleUrls: ['./device-data.page.scss'],
})

export class DeviceDataPage extends abstractPage implements OnInit {

  constructor(public toastController: ToastController,
              public loadingController: LoadingController,
              private router: Router,
              public deviceDataService: DeviceDataService,
              public activatedRoute: ActivatedRoute) 
  { super(toastController, loadingController) }

  dataValues: any = [];
  dataDate: any = [];

  rawMetrics: Array<Metrics>;

  public options = {
    color: ['#3398DB'],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',        
        axisTick: {
          alignWithLabel: true
        },
        data: this.dataDate
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        type: 'bar',
        barWidth: '60%',
        data: this.dataValues
      }
    ]
  };

  

  public device: Device;
  public graphDisplayed: boolean = true;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((device: Device) => {
      this.device = device;
    });

    this.LoadingSpinner().then(() => {
      this.deviceDataService.getDeviceData()
        .then((metrics: Array<Metrics>) => {          
          metrics.forEach(metric => {
            
            this.dataDate.push(metric.date);
            this.dataValues.push(metric.value);

        });
        this.rawMetrics = metrics;
      })

      .catch(error => {
        this.Toast("The server seems busy, please try again later", ToastType.DANGER);
      })
    })
  }
}

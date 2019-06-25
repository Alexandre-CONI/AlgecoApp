import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login/login.service';
import { Router } from '@angular/router';
import { abstractPage } from '../abstractPage';
import { ToastController, LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends abstractPage implements OnInit {

  constructor(public toastController: ToastController,
              public loadingController: LoadingController,
              private loginService: LoginService,
              private router: Router) 
  { super(toastController, loadingController) }

  ngOnInit() {
  }

  login(form): void {
    this.loginService.login(form.value)
      .then(data => {
        this.router.navigateByUrl('devices-list');
      })
      .catch(error => {

    });
  }

}

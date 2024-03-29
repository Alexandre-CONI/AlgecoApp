import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: '../pages/login/login.module#LoginPageModule' },
  { path: 'devices-list', loadChildren: '../pages/devices-list/devices-list.module#DevicesListPageModule' },
  { path: 'device-data', loadChildren: '../pages/device-data/device-data.module#DeviceDataPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

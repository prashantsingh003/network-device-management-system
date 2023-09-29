import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DeviceDetailComponent } from './components/device-detail/device-detail.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path: 'home', component: DashboardComponent},
  {path: 'devices', component: DeviceListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'device/:id', component: DeviceDetailComponent},

  { path: "", redirectTo: 'home', pathMatch: "full" },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

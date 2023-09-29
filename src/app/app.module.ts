import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MaterialComponents } from './material-ui/material-exports';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaterialElevationDirective } from './directives/material-elevation.directive';
import { ConfirmationBoxComponent } from './modals/confirmation-box/confirmation-box.component';
import { AddDeviceModalComponent } from './modals/add-device-modal/add-device-modal.component';
import { EditDeviceModalComponent } from './modals/edit-device-modal/edit-device-modal.component';
import { DeviceDetailComponent } from './components/device-detail/device-detail.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    NotFoundComponent,
    MaterialElevationDirective,
    ConfirmationBoxComponent,
    AddDeviceModalComponent,
    EditDeviceModalComponent,
    DeviceDetailComponent,
    DeviceListComponent,
    AboutComponent,
    SearchComponent,
  ],
  entryComponents:[
    AddDeviceModalComponent,
    EditDeviceModalComponent,
    ConfirmationBoxComponent
  ],
  imports: [
    MaterialComponents,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

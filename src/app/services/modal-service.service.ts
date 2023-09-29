import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Device } from '../utils/models';
import { EditDeviceModalComponent } from '../modals/edit-device-modal/edit-device-modal.component';
import { AddDeviceModalComponent } from '../modals/add-device-modal/add-device-modal.component';


@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  stylingData = {width: screen.width > 600 ? '30%' : '80%'}
  constructor(public dialog:MatDialog) { }

  openAddDeviceDialog(){
    this.dialog.open(AddDeviceModalComponent,{
      ...this.stylingData,
      data:null
    })
  }

  openEditDeviceDialog(device:Device){
    this.dialog.open(EditDeviceModalComponent,{
      ...this.stylingData,
      data:device
    })
  }
}

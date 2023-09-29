import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmationBoxComponent } from 'src/app/modals/confirmation-box/confirmation-box.component';
import { ManageDevicesService } from 'src/app/services/manage-devices.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';
import { Device } from 'src/app/utils/models';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  deviceList:Device[];
  constructor(
    private dialog:MatDialog,
    private manageDevicesService:ManageDevicesService,
    private modalService:ModalServiceService
  ) { }

  ngOnInit() {
    this.deviceList=this.manageDevicesService.devices;
  }
  addDevice(){
    this.modalService.openAddDeviceDialog();
  }
  editDevice(index:number){
    const device=this.manageDevicesService.getDevice(index);
    device['index']=index;
    this.modalService.openEditDeviceDialog(device);
  }
  deleteDevice(index){
    const device=this.manageDevicesService.getDevice(index);
    let dialogRef=this.dialog.open(ConfirmationBoxComponent);
    dialogRef.afterClosed().subscribe(res=>{
      if(res)
      this.manageDevicesService.deleteDevice(index);
    })
  }
  toggleDeviceStatus(index:number){
    this.manageDevicesService.toggleDeviceStatus(index);
  }

}

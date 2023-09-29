import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';
import { ConfirmationBoxComponent } from 'src/app/modals/confirmation-box/confirmation-box.component';
import { ManageDevicesService } from 'src/app/services/manage-devices.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';
import { Device } from 'src/app/utils/models';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {
  device:Device;
  deviceIndex:number;
  constructor(
    private route:ActivatedRoute,
    private dialog:MatDialog,
    private deviceService:ManageDevicesService,
    private modalService:ModalServiceService
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (prams:Params)=>{
        this.setDevice(prams['id']);
      }
    )
  }
  setDevice(index){
    this.deviceIndex=index;
    this.device=this.deviceService.getDevice(index);
  }

  addDevice(){
    this.modalService.openAddDeviceDialog();
  }
  editDevice(){
    const device=this.deviceService.getDevice(this.deviceIndex);
    device['index']=this.deviceIndex;
    this.modalService.openEditDeviceDialog(device);
  }
  deleteDevice(){
    const device=this.deviceService.getDevice(this.deviceIndex);
    let dialogRef=this.dialog.open(ConfirmationBoxComponent);
    dialogRef.afterClosed().subscribe(res=>{
      if(res)
      this.deviceService.deleteDevice(this.deviceIndex);
    })
  }
  toggleDeviceStatus(){
    this.deviceService.toggleDeviceStatus(this.deviceIndex);
  }

}

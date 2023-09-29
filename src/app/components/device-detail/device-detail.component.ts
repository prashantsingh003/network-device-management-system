import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ManageDevicesService } from 'src/app/services/manage-devices.service';
import { Device } from 'src/app/utils/models';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {
  device:Device;
  constructor(
    private route:ActivatedRoute,
    private deviceService:ManageDevicesService
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
    this.device=this.deviceService.getDevice(index);
    console.log(this.device)
  }

}

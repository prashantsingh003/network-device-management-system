import { Component, OnInit } from '@angular/core';
import { Device } from '../../utils/models';
import { ManageDevicesService } from 'src/app/services/manage-devices.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  deviceList:Device[];
  constructor(
    private manageDevicesService:ManageDevicesService,
    ) 
  {}

  ngOnInit() {
    this.deviceList=this.manageDevicesService.devices;
  }
  activeDevices(){
    let count=0;
    this.deviceList.forEach(el=>{
      if(el.active) count++;
    })
    return count;
  }
  inactiveDevices(){
    let count=0;
    this.deviceList.forEach(el=>{
      if(!el.active) count++;
    })
    return count;
  }
  totalDevices(){
    return this.deviceList.length;
  }
  deviceWidth(){
    return screen.width
  }
}

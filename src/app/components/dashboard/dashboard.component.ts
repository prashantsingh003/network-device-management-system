import { Component, OnInit } from '@angular/core';
import { Device } from '../../utils/modals';
import { ManageDevicesService } from 'src/app/services/manage-devices.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  devices:Device[];
  constructor(private manageDevicesService:ManageDevicesService) {
    this.devices=this.manageDevicesService.getDeviceList();
  }

  ngOnInit() {
  }

  getDeviceList(){
    return this.devices;
  }

}

import { Injectable } from '@angular/core';
import { Device } from '../utils/models'
import SAMPLE_DEVICES from '../samples/devices.json';
import { SnackbarMessageService } from './snackbar-message.service';
@Injectable({
  providedIn: 'root'
})
export class ManageDevicesService {
  devices:Device[];
  constructor(
    private msgService:SnackbarMessageService
    ) {
    // LOADING SAMPLE
    this.devices=SAMPLE_DEVICES;
  }
  addDevice(device:Device){
    this.devices.push(device);
  }
  updateDevice(index:number,device:Device){
    this.devices[index]=device;
  }
  deleteDevice(index){
    this.devices.splice(index,1);
  }
  toggleDeviceStatus(index:number){
    const device=this.devices[index];
    device.active=!device.active;
  }
  getDevice(index:number){
    return this.devices[index];
  }
}

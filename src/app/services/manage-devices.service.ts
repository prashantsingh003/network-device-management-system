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
    this.msgService.showMessage({text:'Device Added!!',type:'primary'});
  }
  updateDevice(index:number,device:Device){
    this.devices[index]=device;
    this.msgService.showMessage({
      text:`Device: ${this.devices[index].name.toUpperCase()} updated!!`,
      type:'primary'
    });
  }
  deleteDevice(index){
    const dev=this.devices.splice(index,1)[0];
    this.msgService.showMessage({text:'Device: '+dev.name.toUpperCase()+' deleted successfully!!',type:'warn'});
  }
  toggleDeviceStatus(index:number){
    const device=this.devices[index];
    device.active=!device.active;
    this.msgService.showMessage({
      text:device.name.toUpperCase()+`'s status set to ${device.active?'active':'inactive'}`,
      type:'warn'
    });
  }
  getDevice(index:number){
    return this.devices[index];
  }
  passMessage(msg){
    this.msgService.showMessage({text:msg,type:''})
  }
}

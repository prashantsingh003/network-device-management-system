import { Injectable } from '@angular/core';
import { Device } from '../utils/modals'
import SAMPLE_DEVICES from '../samples/devices.json';
@Injectable({
  providedIn: 'root'
})
export class ManageDevicesService {
  devices:Device[];
  constructor() {
    // LOADING SAMPLE
    const devices=[];
    const sampleDevices=SAMPLE_DEVICES;
    sampleDevices.forEach(el=>{
      devices.push(new Device(el.name,el.brand,el.version,el.type,el.id,el.status));
      this.devices=devices;
    })
   }

  getDeviceList(){
    return this.devices;
  }
}

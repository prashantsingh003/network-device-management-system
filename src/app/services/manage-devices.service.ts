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
    this.devices=SAMPLE_DEVICES;
  }

  addDevice(device:{}){}
}

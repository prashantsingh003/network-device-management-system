import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ManageDevicesService } from 'src/app/services/manage-devices.service';

@Component({
  selector: 'app-edit-device-modal',
  templateUrl: './edit-device-modal.component.html',
  styleUrls: ['./edit-device-modal.component.scss']
})
export class EditDeviceModalComponent implements OnInit {
  deviceForm: FormGroup;
  constructor(
    private manageDevicesService: ManageDevicesService,
    @Inject(MAT_DIALOG_DATA) public device: any
  ) { }

  ngOnInit() {
    const device=this.device;
    this.deviceForm = new FormGroup({
      name: new FormControl( device ? device.name : null, [Validators.required] ),
      brand: new FormControl( device ? device.brand : null, [Validators.required] ),
      version: new FormControl( device ? device.version : null, [Validators.required] ),
      type: new FormControl(device ? device.type : null),
      description: new FormControl(device ? device.description : null),
    });
  }
  submit(){
    if(this.deviceForm.invalid) return;
    this.manageDevicesService.updateDevice(this.device.index,this.deviceForm.value);
    this.deviceForm.reset();
  }
}

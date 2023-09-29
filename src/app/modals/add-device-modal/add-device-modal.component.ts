import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManageDevicesService } from 'src/app/services/manage-devices.service';

@Component({
  selector: 'app-add-device-modal',
  templateUrl: './add-device-modal.component.html',
  styleUrls: ['./add-device-modal.component.scss']
})
export class AddDeviceModalComponent implements OnInit {
  deviceForm: FormGroup;
  constructor(
    private manageDevicesService: ManageDevicesService,
  ) { }

  ngOnInit() {
    this.deviceForm = new FormGroup({
      name: new FormControl( null, [Validators.required] ),
      brand: new FormControl(  null, [Validators.required] ),
      version: new FormControl(  null, [Validators.required] ),
      type: new FormControl( null),
      description: new FormControl( null),
    });
  }
  submit(){
    if(this.deviceForm.invalid) return;
    this.manageDevicesService.addDevice(this.deviceForm.value);
    this.deviceForm.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ManageDevicesService } from 'src/app/services/manage-devices.service';
import { Device } from 'src/app/utils/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl('');
  deviceList: Device[];
  filteresDevices: Observable<Device[]>;

  constructor(
    private deviceService:ManageDevicesService
  ){}

  ngOnInit() {
    this.deviceList=this.deviceService.devices;
    this.filteresDevices = this.searchControl.valueChanges.pipe(
      map(value => this.filter(value || '')),
    );
  }

  private filter(value: string): Device[] {
    const filterValue = value.toLowerCase();

    return this.deviceList.filter(device => device.name.toLowerCase().includes(filterValue));
  }
}

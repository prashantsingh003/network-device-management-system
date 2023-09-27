import { TestBed } from '@angular/core/testing';

import { ManageDevicesService } from './manage-devices.service';

describe('ManageDevicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageDevicesService = TestBed.get(ManageDevicesService);
    expect(service).toBeTruthy();
  });
});

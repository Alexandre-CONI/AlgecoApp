import { TestBed } from '@angular/core/testing';

import { DevicesListService } from './devices-list.service';

describe('DevicesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevicesListService = TestBed.get(DevicesListService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GymserviceService } from './gymservice.service';

describe('GymserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GymserviceService = TestBed.get(GymserviceService);
    expect(service).toBeTruthy();
  });
});

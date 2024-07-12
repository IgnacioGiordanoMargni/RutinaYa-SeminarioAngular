import { TestBed } from '@angular/core/testing';

import { RutinaDataService } from './rutina-data.service';

describe('RutinaDataService', () => {
  let service: RutinaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutinaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UdsService } from './uds.service';

describe('UdsService', () => {
  let service: UdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

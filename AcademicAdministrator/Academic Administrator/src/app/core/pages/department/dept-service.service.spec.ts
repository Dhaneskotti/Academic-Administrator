import { TestBed } from '@angular/core/testing';

import { DeptServiceService } from './dept-service.service';

describe('DeptServiceService', () => {
  let service: DeptServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OnscrollService } from './onscroll.service';

describe('OnscrollService', () => {
  let service: OnscrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnscrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

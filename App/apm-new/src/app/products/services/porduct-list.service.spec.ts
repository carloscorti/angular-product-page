import { TestBed } from '@angular/core/testing';

import { PorductListService } from './porduct-list.service';

describe('PorductListService', () => {
  let service: PorductListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorductListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

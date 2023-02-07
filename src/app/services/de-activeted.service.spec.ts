import { TestBed } from '@angular/core/testing';

import { DeActivetedService } from './de-activeted.service';

describe('DeActivetedService', () => {
  let service: DeActivetedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeActivetedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

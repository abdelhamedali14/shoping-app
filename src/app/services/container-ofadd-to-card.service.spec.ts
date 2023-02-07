import { TestBed } from '@angular/core/testing';

import { ContainerOFAddToCardService } from './container-ofadd-to-card.service';

describe('ContainerOFAddToCardService', () => {
  let service: ContainerOFAddToCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContainerOFAddToCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

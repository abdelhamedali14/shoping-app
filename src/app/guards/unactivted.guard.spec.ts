import { TestBed } from '@angular/core/testing';

import { UnactivtedGuard } from './unactivted.guard';

describe('UnactivtedGuard', () => {
  let guard: UnactivtedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnactivtedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

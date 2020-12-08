import { TestBed } from '@angular/core/testing';

import { Activate2Guard } from './activate2.guard';

describe('Activate2Guard', () => {
  let guard: Activate2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Activate2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ShowArrayService } from './show-array.service';

describe('ShowArrayService', () => {
  let service: ShowArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ApistrapiService } from './apistrapi.service';

describe('ApistrapiService', () => {
  let service: ApistrapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApistrapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

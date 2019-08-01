import { TestBed } from '@angular/core/testing';

import { ResultServiceService } from './result-service.service';

describe('ResultServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultServiceService = TestBed.get(ResultServiceService);
    expect(service).toBeTruthy();
  });
});

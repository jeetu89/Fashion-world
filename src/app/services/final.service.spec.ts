import { TestBed } from '@angular/core/testing';

import { FinalService } from './final.service';

describe('FinalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinalService = TestBed.get(FinalService);
    expect(service).toBeTruthy();
  });
});

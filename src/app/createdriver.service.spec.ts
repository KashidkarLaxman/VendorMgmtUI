import { TestBed } from '@angular/core/testing';

import { CreatedriverService } from './createdriver.service';

describe('CreatedriverService', () => {
  let service: CreatedriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatedriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

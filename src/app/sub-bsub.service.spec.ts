import { TestBed } from '@angular/core/testing';

import { SubBsubService } from './sub-bsub.service';

describe('SubBsubService', () => {
  let service: SubBsubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubBsubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

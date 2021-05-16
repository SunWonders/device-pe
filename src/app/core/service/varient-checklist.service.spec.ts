import { TestBed } from '@angular/core/testing';

import { VarientChecklistService } from './varient-checklist.service';

describe('VarientChecklistService', () => {
  let service: VarientChecklistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VarientChecklistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RecoveryPassService } from './recovery-pass.service';

describe('RecoveryPassService', () => {
  let service: RecoveryPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoveryPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

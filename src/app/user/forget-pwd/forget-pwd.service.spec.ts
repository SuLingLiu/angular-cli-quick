import { TestBed, inject } from '@angular/core/testing';

import { ForgetPwdService } from './forget-pwd.service';

describe('ForgetPwdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgetPwdService]
    });
  });

  it('should be created', inject([ForgetPwdService], (service: ForgetPwdService) => {
    expect(service).toBeTruthy();
  }));
});

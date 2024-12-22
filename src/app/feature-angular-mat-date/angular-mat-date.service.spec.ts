import { TestBed } from '@angular/core/testing';

import { AngularMatDateService } from './angular-mat-date.service';

describe('AngularMatDateService', () => {
  let service: AngularMatDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularMatDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

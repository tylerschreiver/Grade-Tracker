/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GradeReceiverService } from './grade-receiver.service';

describe('GradeReceiverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GradeReceiverService]
    });
  });

  it('should ...', inject([GradeReceiverService], (service: GradeReceiverService) => {
    expect(service).toBeTruthy();
  }));
});

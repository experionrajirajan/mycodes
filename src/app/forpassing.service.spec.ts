/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ForpassingService } from './forpassing.service';

describe('ForpassingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForpassingService]
    });
  });

  it('should ...', inject([ForpassingService], (service: ForpassingService) => {
    expect(service).toBeTruthy();
  }));
});

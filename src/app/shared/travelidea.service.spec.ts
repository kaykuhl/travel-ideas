import { TestBed } from '@angular/core/testing';

import { TravelideaService } from './travelidea.service';

describe('TravelideaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelideaService = TestBed.get(TravelideaService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MoviesProfileServiceService } from './movies-profile-service.service';

describe('MoviesProfileServiceService', () => {
  let service: MoviesProfileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesProfileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

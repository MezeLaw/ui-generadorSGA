import { TestBed } from '@angular/core/testing';

import { GeneradorSGAServiceService } from './generador-sgaservice.service';

describe('GeneradorSGAServiceService', () => {
  let service: GeneradorSGAServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneradorSGAServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

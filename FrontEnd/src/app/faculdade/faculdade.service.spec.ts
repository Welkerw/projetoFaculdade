import { TestBed, inject } from '@angular/core/testing';

import { FaculdadeService } from './faculdade.service';

describe('FaculdadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaculdadeService]
    });
  });

  it('should be created', inject([FaculdadeService], (service: FaculdadeService) => {
    expect(service).toBeTruthy();
  }));
});

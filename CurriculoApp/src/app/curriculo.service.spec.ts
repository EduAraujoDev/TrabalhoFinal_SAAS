/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurriculoService } from './curriculo.service';

describe('CurriculoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurriculoService]
    });
  });

  it('should ...', inject([CurriculoService], (service: CurriculoService) => {
    expect(service).toBeTruthy();
  }));
});

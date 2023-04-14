import { TestBed } from '@angular/core/testing';

import { VisorPdfService } from './visor-pdf.service';

describe('VisorPdfService', () => {
  let service: VisorPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisorPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ErrorCheckInterceptor } from './error-check.interceptor';

describe('ErrorCheckInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorCheckInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorCheckInterceptor = TestBed.inject(ErrorCheckInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

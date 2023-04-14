import { TestBed } from '@angular/core/testing';

import { JwtExceptionTokenInterceptor } from './jwt-exception-token.interceptor';

describe('JwtExceptionTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtExceptionTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtExceptionTokenInterceptor = TestBed.inject(JwtExceptionTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

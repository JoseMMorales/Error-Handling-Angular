import { TestBed } from '@angular/core/testing';

import { GlobalHttpErrorHandlerInterceptor } from './global-http-error-handler.interceptor';

describe('GlobalHttpErrorHandlerInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [GlobalHttpErrorHandlerInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: GlobalHttpErrorHandlerInterceptor = TestBed.inject(
      GlobalHttpErrorHandlerInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});

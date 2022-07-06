import { TestBed } from '@angular/core/testing';

import { MickeymouseInterceptor } from './mickeymouse.interceptor';

describe('MickeymouseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MickeymouseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MickeymouseInterceptor = TestBed.inject(MickeymouseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

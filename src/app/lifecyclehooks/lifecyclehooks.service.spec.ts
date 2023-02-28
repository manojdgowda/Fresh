import { TestBed } from '@angular/core/testing';

import { LifecyclehooksService } from './lifecyclehooks.service';

describe('LifecyclehooksService', () => {
  let service: LifecyclehooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LifecyclehooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { AutoscrollService } from './autoscroll.service';

describe('AutoscrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutoscrollService]
    });
  });

  it('should be created', inject([AutoscrollService], (service: AutoscrollService) => {
    expect(service).toBeTruthy();
  }));
});

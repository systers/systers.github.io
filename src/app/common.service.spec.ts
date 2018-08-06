import { TestBed, inject } from '@angular/core/testing';

import { CommonService } from './common.service';

xdescribe('CommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonService]
    });
  });

  it('should be created', inject([CommonService], (service: CommonService) => {
    expect(service).toBeTruthy();
  }));
});


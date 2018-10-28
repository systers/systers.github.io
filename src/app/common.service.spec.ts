import { TestBed, inject } from '@angular/core/testing';
import { CommonService } from './common.service';
import { HttpModule } from '@angular/http';

describe('CommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [ CommonService ]
    });
  });

  it('should be created', inject([CommonService], (service: CommonService) => {
    expect(service).toBeTruthy();
  }));
});


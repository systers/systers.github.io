import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomerComponent } from './newcomer.component';

describe('NewcomerComponent', () => {
  let component: NewcomerComponent;
  let fixture: ComponentFixture<NewcomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

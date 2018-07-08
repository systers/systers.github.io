import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomersComponent } from './newcomers.component';

describe('NewcomersComponent', () => {
  let component: NewcomersComponent;
  let fixture: ComponentFixture<NewcomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

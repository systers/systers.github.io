import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorsComponent } from './contributors.component';

xdescribe('ContributorsComponent', () => {
  let component: ContributorsComponent;
  let fixture: ComponentFixture<ContributorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


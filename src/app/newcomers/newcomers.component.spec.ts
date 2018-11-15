import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NewcomersComponent } from './newcomers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('NewcomersComponent', () => {
  let component: NewcomersComponent;
  let fixture: ComponentFixture<NewcomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomersComponent ],
      imports: [
        MDBBootstrapModule.forRoot(),
        NgbModule.forRoot()
      ]
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


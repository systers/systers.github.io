import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContributorsComponent } from './contributors.component';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { pipe } from './pipe';
import { GetFirstWord } from './first.pipe';

describe('ContributorsComponent', () => {
  let component: ContributorsComponent;
  let fixture: ComponentFixture<ContributorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContributorsComponent,
        pipe,
        GetFirstWord
      ],
      imports: [
        FormsModule,
        MDBBootstrapModule.forRoot(),
        NgbModule.forRoot()
      ]
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


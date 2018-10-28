import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FAQComponent } from './faq.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('FAQComponent', () => {
  let component: FAQComponent;
  let fixture: ComponentFixture<FAQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FAQComponent ],
      imports: [
        NgbModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


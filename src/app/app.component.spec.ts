import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContributorsComponent } from './contributors/contributors.component';
import { ContactComponent } from './contact/contact.component';
import { FAQComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewcomersComponent } from './newcomers/newcomers.component';
import { ProgramsComponent } from './programs/programs.component';
import { ProjectsComponent } from './projects/projects.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { pipe } from './contributors/pipe';
import { GetFirstWord } from './contributors/first.pipe';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContactComponent,
        ContributorsComponent,
        FAQComponent,
        FooterComponent,
        HomeComponent,
        NavbarComponent,
        NewcomersComponent,
        ProgramsComponent,
        ProjectsComponent,
        pipe,
        GetFirstWord
      ],
      imports: [
        MDBBootstrapModule.forRoot(),
        FormsModule,
        AppRoutingModule,
        NgbModule.forRoot(),
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});


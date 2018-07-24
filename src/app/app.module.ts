import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pipe, PipeTransform } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FAQComponent } from './faq/faq.component';
import { NewcomersComponent } from './newcomers/newcomers.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { pipe } from './contributors/pipe';
import { GetFirstWord } from './contributors/first.pipe';
import { ProgramsComponent } from './programs/programs.component';
import { HttpModule } from '@angular/http';
import {CommonService} from './common.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    FAQComponent,
    NewcomersComponent,
    ContributorsComponent,
    pipe,
    GetFirstWord,
    ProgramsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'Your_api_key'
    })
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }


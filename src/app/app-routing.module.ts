import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { NewcomersComponent } from './newcomers/newcomers.component';
import {ProgramComponent} from './program/program.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'projects',
  component: ProjectsComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'newcomers',
  component: NewcomersComponent
},
{
  path: 'programs',
  component: ProgramComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

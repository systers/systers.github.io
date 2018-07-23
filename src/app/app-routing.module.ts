import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FAQComponent } from './faq/faq.component';
import { NewcomersComponent } from './newcomers/newcomers.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { ProgramsComponent } from './programs/programs.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
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
		path: 'FAQ',
		component: FAQComponent
  },
  {
		path: 'contributors',
		component: ContributorsComponent
	},
	{
		path: 'newcomers',
		component: NewcomersComponent
	},
	{
		path: 'programs',
		component: ProgramsComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }


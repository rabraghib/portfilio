import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { Routes, RouterModule } from '@angular/router';

import { SammaryPipe } from '../pipes/sammary.pipe';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './about/aboutme/aboutme.component';
import { InterstsComponent } from './about/intersts/intersts.component';
import { ServiceComponent } from './about/service/service.component';
import { ResumeComponent } from './resume/resume.component';
import { FormComponent } from './contact/form/form.component';
import { InfoComponent } from './contact/info/info.component';
import { ExperiencesComponent } from './resume/experiences/experiences.component';
import { EducationComponent } from './resume/education/education.component';
import { SkillsComponent } from './resume/skills/skills.component';

const routes:Routes = [
  { path:'' , component:HomeComponent },
  { path:'about' , component:AboutComponent },
  { path:'projects' , redirectTo:'projects/All' },
  { path:'projects/:theme' , component:ProjectsComponent },
  { path:'contact' , component:ContactComponent },
  { path:'resume' , component:ResumeComponent },
  { path:'**' , redirectTo:'' }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent,
    AboutmeComponent,
    InterstsComponent,
    ServiceComponent,
    SammaryPipe,
    ResumeComponent,
    FormComponent,
    InfoComponent,
    ExperiencesComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

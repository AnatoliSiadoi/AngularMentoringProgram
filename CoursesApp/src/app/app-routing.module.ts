import { CoursesSectionComponent } from './courses-section/courses-section.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseEditCreatePageComponent } from './course-edit-create-page/course-edit-create-page.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { AuthenticationGuardService } from './services/authentication-guard.service'

const routes: Routes = [
  { path: '',   redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesPageComponent, data: { breadcrumb: 'Courses'},
  children: [
      { path: '', component: CoursesSectionComponent },
      { path: 'new', component: CourseEditCreatePageComponent, canActivate: [AuthenticationGuardService], data: { breadcrumb: 'New'} },
      { path: ':id', component: CourseEditCreatePageComponent, canActivate: [AuthenticationGuardService], data: {breadcrumb: ''} },
   ]},
  { path: '**', component: RouteNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

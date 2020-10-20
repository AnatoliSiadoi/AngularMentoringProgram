import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesSectionComponent } from './courses-section/courses-section.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { SearchletComponent } from './searchlet/searchlet.component';
import { FormsModule } from '@angular/forms';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';

const appRoutes: Routes =[
  { path: '', component: CoursesPageComponent },
  { path: '**', component: RouteNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    CoursesSectionComponent,
    CourseItemComponent,
    FooterComponent,
    LogoComponent,
    SearchletComponent,
    RouteNotFoundComponent,
    CoursesPageComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

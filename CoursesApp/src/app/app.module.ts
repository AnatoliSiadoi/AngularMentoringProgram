import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthenticationModule } from './authentication/authentication.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesSectionComponent } from './courses-section/courses-section.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { SearchletComponent } from './searchlet/searchlet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';

import { CourseDateDirective } from './directives/courseDate.directive';

import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/orderBy.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DatePipe } from '@angular/common';
import { CourseEditCreatePageComponent } from './course-edit-create-page/course-edit-create-page.component';
import { AppRoutingModule } from './app-routing.module';

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
    CourseDateDirective,
    CoursesPageComponent,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    CourseEditCreatePageComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    AppRoutingModule
  ],
  providers: [FilterPipe, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

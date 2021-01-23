import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Effect, ofType } from '@ngrx/effects';
import * as actions from './../actions/courses.actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ICoursesState } from './../reducers/courses.reducer';
import { CourseServiceService } from './../../services/course-service.service';
import { of } from 'rxjs';
import { concatMap, map, delay } from 'rxjs/operators';
import { addCourseSuccess, saveCourseSuccess, searchCourseSuccess, deleteCourseSuccess, saveCourses, loadCourses, editCourseSuccess } from './../actions/courses.actions';

@Injectable()
export class CoursesEffects {

  constructor(
    private actions$: Actions,
    private store: Store<ICoursesState>,
    private coursesService: CourseServiceService
  ) { }

  @Effect()
  loadingCourses$ = this.actions$.pipe(
    ofType(actions.loadCourses),
    map(() => of( this.coursesService.getAll()
      .subscribe(courses => this.store.dispatch(saveCourses({ courses }))))),
    concatMap(() => of(saveCourseSuccess()))
  );

  @Effect()
  deleteCourse$ = this.actions$.pipe(
    ofType(actions.deleteCourse),
    map(action => of( this.coursesService.delete(action.id)
      .subscribe(() => of( this.store.dispatch(loadCourses()))))),
    concatMap(() => of(deleteCourseSuccess()))
  );

  @Effect()
  addCourse$ = this.actions$.pipe(
    ofType(actions.addCourse),
    map(action => of(this.coursesService.add(action.course).subscribe())),
    concatMap(() => of(this.store.dispatch(loadCourses()))),
    concatMap(() => of(addCourseSuccess()))
  );

  @Effect()
  editCourse$ = this.actions$.pipe(ofType(actions.editCourse),
    map(action => of(this.coursesService.update(action.course).subscribe())),
    concatMap(() => of(this.store.dispatch(loadCourses()))),
    concatMap(() => of(editCourseSuccess()))
  );

  @Effect()
  search$ = this.actions$.pipe(ofType(actions.searchCourse),
    map(action => {
      if (action.search.length > 3) {
        of(this.coursesService.getAll(0, 50, 'date', action.search)
          .subscribe(courses => this.store.dispatch(saveCourses({courses}))));
      } else {
        of(this.store.dispatch(loadCourses()));
      }
    }),
    concatMap(() => of(searchCourseSuccess()))
  );
}

import { createAction, props } from '@ngrx/store';
import { ICourse } from './../../Interfaces/ICourse'

export enum coursesActionsType {
  loadCourses = '[Courses] load courses',
  addCourse = '[Courses] add course',
  addCourseSuccess = '[Courses] add course success',
  editCourse = '[Courses] edit course',
  editCourseSuccess = '[Courses] edit course success',
  deleteCourse = '[Courses] delete course',
  deleteCourseSuccess = '[Courses] delete course success',
  searchCourse = '[Courses] search course',
  searchCourseSuccess = '[Courses] search course success',
  saveCourses = '[Courses] save courses',
  saveCoursesSuccess = '[Courses] save courses success',
}

export const loadCourses = createAction(
  coursesActionsType.loadCourses
);

export const addCourse = createAction(
  coursesActionsType.addCourse,
  props<{course: ICourse;}>()
);

export const addCourseSuccess = createAction(
  coursesActionsType.addCourseSuccess
);

export const editCourse = createAction(
  coursesActionsType.editCourse,
  props<{course: ICourse;}>()
);

export const editCourseSuccess = createAction(
  coursesActionsType.editCourseSuccess
);

export const deleteCourse = createAction(
  coursesActionsType.deleteCourse,
  props<{id: number;}>()
);

export const deleteCourseSuccess = createAction(
  coursesActionsType.deleteCourseSuccess
);

export const searchCourse = createAction(
  coursesActionsType.searchCourse,
  props<{search: string;}>()
);

export const searchCourseSuccess = createAction(
  coursesActionsType.searchCourseSuccess
);

export const saveCourses = createAction(
  coursesActionsType.saveCourses,
  props<{courses: ICourse[];}>()
);

export const saveCourseSuccess = createAction(
  coursesActionsType.saveCoursesSuccess
);

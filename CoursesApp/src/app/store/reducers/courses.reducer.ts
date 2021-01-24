import { Action, createReducer, on } from '@ngrx/store';
import { ICourse } from './../../Interfaces/ICourse';
import * as actions from './../actions/courses.actions';


export const coursesFeatureKey = 'courses';

export interface ICoursesState {
  courses: ICourse[];
  searchParam: string;
}

export const initialState: ICoursesState = {
  courses: [],
  searchParam: ''
};


const coursesReducer = createReducer(
  initialState,
  on( actions.saveCourses, ( state: ICoursesState, action ) => ({ ...state, courses: action.courses })),
  on( actions.searchCourse, ( state: ICoursesState, action ) => ( { ...state, searchParam: action.search }))
);

export default coursesReducer;
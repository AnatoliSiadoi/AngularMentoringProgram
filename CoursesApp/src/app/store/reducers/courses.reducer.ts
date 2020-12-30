import { Action, createReducer, on } from '@ngrx/store';
import { ICourse } from './../../Interfaces/ICourse';


export const coursesFeatureKey = 'courses';

export interface ICoursesState {
  courses: ICourse[];
  searchParam: string;
}

export const initialState: ICoursesState = {
  courses: [],
  searchParam: '',
};


const coursesReducer = createReducer(
  initialState,

);

export default coursesReducer;
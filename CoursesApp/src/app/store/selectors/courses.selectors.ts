import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICoursesState, coursesFeatureKey } from './../reducers/courses.reducer';
import { ICourse } from './../../Interfaces/ICourse';

export const selectCoursesFeature = createFeatureSelector<ICoursesState>(coursesFeatureKey);

export const selectCourses = createSelector(
    selectCoursesFeature,
    (state: ICoursesState) : ICourse[] => state.courses
);

export const selectSearchParam = createSelector(
    selectCoursesFeature,
    (state: ICoursesState) : string => state.searchParam
);


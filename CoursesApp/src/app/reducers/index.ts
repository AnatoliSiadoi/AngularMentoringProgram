import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IAuthenticationState, authenticationFeatureKey } from '../store/reducers/authentication.reducer';
import authenticationReducer from '../store/reducers/authentication.reducer';
import { ICoursesState, coursesFeatureKey } from '../store/reducers/courses.reducer';
import coursesReducer from '../store/reducers/courses.reducer';


export interface State {
  [authenticationFeatureKey] : IAuthenticationState;
  [coursesFeatureKey] : ICoursesState;
}

export const reducers: ActionReducerMap<State> = {
  [authenticationFeatureKey] : authenticationReducer,
  [coursesFeatureKey] : coursesReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

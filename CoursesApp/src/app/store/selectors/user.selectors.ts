import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthenticationState, authenticationFeatureKey } from './../reducers/authentication.reducer';
import { IUser } from './../../Interfaces/iuser';

export const selectUserFeature = createFeatureSelector<IAuthenticationState>(authenticationFeatureKey);

export const selectisAuthenticated = createSelector(
    selectUserFeature,
    (state: IAuthenticationState) : boolean => state.isAuthenticated
);

export const selectCurrentUser = createSelector(
    selectUserFeature,
    (state: IAuthenticationState) : IUser => state.currentUser
);


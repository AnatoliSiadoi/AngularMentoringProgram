import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './../actions/authentication.actions';
import { IUser } from './../../interfaces/IUser';


export const authenticationFeatureKey = 'authentication';

export interface IAuthenticationState {
  isAuthenticated: boolean;
  currentUser: IUser;
}

export const initialState: IAuthenticationState = {
  isAuthenticated: false,
  currentUser: null
};


const authenticationReducer = createReducer(
  initialState,
  on( actions.loginAuthentications, ( state: IAuthenticationState ) => ({ ...state, isAuthenticated: true })),
  on( actions.logoutAuthentications, ( state: IAuthenticationState ) => ({ ...state, isAuthenticated: false, currentUser: null })),
  on( actions.setUpCurrentUserAuthentications, ( state: IAuthenticationState, currentUser ) => ({ ...state, currentUser }))
);

export default authenticationReducer;


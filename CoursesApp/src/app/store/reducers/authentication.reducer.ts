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
  on( actions.loginAuthentications, ( state: IAuthenticationState ) => ( { ...state, isAuth: true })),
  on( actions.logoutAuthentications, ( state: IAuthenticationState ) => ( { ...state, isAuth: false, userInfo: null })),
);

export default authenticationReducer;


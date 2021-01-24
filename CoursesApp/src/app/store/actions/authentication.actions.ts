import { createAction, props } from '@ngrx/store';
import { IUser } from './../../Interfaces/IUser'

export enum authenticationsActionsType {
  login = '[Authentication] login',
  loginSuccess = '[Authentication] login success',
  logout = '[Authentication] logout',
  logoutSuccess = '[Authentication] logout success',
  setUpCurrentUser = '[Authentication] setUpCurrentUser',
  setUpCurrentUserSuccess = '[Authentication] setUpCurrentUser success'
}

export const loginAuthentications = createAction(
  authenticationsActionsType.login,
  props<IUser>()
);

export const loginSuccessAuthentications = createAction(
  authenticationsActionsType.loginSuccess
);

export const logoutAuthentications = createAction(
  authenticationsActionsType.logout
);

export const logoutSuccessAuthentications = createAction(
  authenticationsActionsType.logoutSuccess
);

export const setUpCurrentUserAuthentications = createAction(
  authenticationsActionsType.setUpCurrentUser,
  props<IUser>()
);

export const setUpCurrentUserSuccessAuthentications = createAction(
  authenticationsActionsType.setUpCurrentUserSuccess
);


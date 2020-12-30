import { createAction, props } from '@ngrx/store';
import { IUser } from './../../Interfaces/IUser'

export enum authenticationsActionsType {
  login = '[Authentication] login',
  logout = '[Authentication] logout',
  logoutSuccess = '[Authentication] logout success',
  loginSuccess = '[Authentication] login success'
}

export const loginAuthentications = createAction(
  authenticationsActionsType.login,
  props<IUser>()
);

export const loginSuccessAuthentications = createAction(
  authenticationsActionsType.logoutSuccess
);

export const logoutAuthentications = createAction(
  authenticationsActionsType.logout
);

export const logoutSuccessAuthentications = createAction(
  authenticationsActionsType.logoutSuccess
);


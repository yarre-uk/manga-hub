import { StringMap } from './utils';
import { ResponseStatusCode } from '../constants/common';

export type Role = 'Admin' | 'User';

export type TApiFieldErrors = StringMap<string[]>;

export interface IApiError {
  status: ResponseStatusCode;
  message: string;
  errors?: StringMap<string> | null;
}

export interface IApiResponseError {
  message: string;
  errors?: StringMap<string[]>;
}

export enum AuthFieldsNames {
  AVATAR = 'avatar',
  NICKNAME = 'nickname',
  EMAIL = 'email',
  PASSWORD = 'password',
  PASSWORD_CONFIRMATION = 'passwordConfirmation',
}

export type SignInFormValues = {
  [AuthFieldsNames.EMAIL]: string;
  [AuthFieldsNames.PASSWORD]: string;
};

export type SignUpFormValues = {
  [AuthFieldsNames.EMAIL]: string;
  [AuthFieldsNames.NICKNAME]: string;
  [AuthFieldsNames.PASSWORD]: string;
  [AuthFieldsNames.PASSWORD_CONFIRMATION]: string;
};

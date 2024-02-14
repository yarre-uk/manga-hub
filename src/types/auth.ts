import { ResponseStatusCode } from '../constants/common';
import { StringMap } from '../utils';

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
  CONFIRM_PASSWORD = 'confirm_password',
}

export type SignInFormValues = {
  [AuthFieldsNames.EMAIL]: string;
  [AuthFieldsNames.PASSWORD]: string;
};

export type SignUpFormValues = {
  [AuthFieldsNames.EMAIL]: string;
  [AuthFieldsNames.NICKNAME]: string;
  [AuthFieldsNames.PASSWORD]: string;
  [AuthFieldsNames.CONFIRM_PASSWORD]: string;
};

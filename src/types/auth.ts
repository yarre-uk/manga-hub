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
  LOGIN = 'login',
  NAME = 'name',
  EMAIL = 'email',
  EMAIL_OR_LOGIN = 'email_or_login',
  PASSWORD = 'password',
  CREATE_PASSWORD = 'create_password',
  CONFIRM_PASSWORD = 'confirm_password',
  CURRENT_PASSWORD = 'current_password',
  SUBSCRIPTION = 'subscription',
}

export type TLoginFormValues = {
  [AuthFieldsNames.EMAIL_OR_LOGIN]: string;
  [AuthFieldsNames.PASSWORD]: string;
};

export type TRegisterFormValues = {
  [AuthFieldsNames.EMAIL]: string;
  [AuthFieldsNames.LOGIN]: string;
  [AuthFieldsNames.PASSWORD]: string;
  [AuthFieldsNames.CONFIRM_PASSWORD]: string;
};

export type TForgotPasswordFormValues = {
  [AuthFieldsNames.EMAIL]: string;
};

export type TResetPasswordFormValues = {
  [AuthFieldsNames.CREATE_PASSWORD]: string;
  [AuthFieldsNames.CONFIRM_PASSWORD]: string;
};

export type TUpdateUserDataFormValues = {
  [AuthFieldsNames.AVATAR]: File | string;
  [AuthFieldsNames.NAME]: string;
  [AuthFieldsNames.EMAIL]: string;
};

export type TChangePasswordFormValues = {
  [AuthFieldsNames.CURRENT_PASSWORD]: string;
  [AuthFieldsNames.CREATE_PASSWORD]: string;
  [AuthFieldsNames.CONFIRM_PASSWORD]: string;
};

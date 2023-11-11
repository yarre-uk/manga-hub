import { ResponseStatusCode } from '@/shared/constants/common';
import { StringMap } from '@/shared/utils';

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

export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';
export const API_URL = `${BASE_API_URL}/api`;

export const AUTHORIZATION_STORAGE_KEY = 'authorized';
export const AUTHORIZATION_TOKEN_STORAGE_KEY = 'auth_token';
export const REFRESH_TOKEN_STORAGE_KEY = 'refresh_token';

export const CLIENT_URL = process.env.NEXT_PUBLIC_CLIENT_URL ?? '';

export const SAVED_ROUTE_LOCATION_DATA_STORAGE_KEY =
  'saved_route_location_data';

export enum ResponseStatusCode {
  SUCCESS = 200,
  CREATED = 201,
  ACCEPTED = 202,
  TEMPORARY_REDIRECT = 307,
  BAD_REQUEST = 400,
  NOT_AUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  SOMETHING_WRONG = 418,
  SERVER_ERROR = 500,
}

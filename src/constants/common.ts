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

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

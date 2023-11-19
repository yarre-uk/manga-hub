export const enum ROUTE {
  HOME = '/',
  PAGE_NOT_FOUND = '/404',

  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  CHANGE_PASSWORD = '/change-password',
  FORGOT_PASSWORD = '/forgot-password',

  PROFILE = '/profile',
  MANGA = `/manga`,
  ADD_MANGA = `${ROUTE.MANGA}/add-manga`,
  EDIT_MANGA = `${ROUTE.MANGA}/edit-manga`,

  ADMIN = '/admin',
  SET_ADMIN = `${ROUTE.ADMIN}/set-admin`,
}

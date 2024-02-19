export const enum ROUTE {
  HOME = '/',
  PAGE_NOT_FOUND = '/404',

  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  CHANGE_PASSWORD = '/change-password',
  FORGOT_PASSWORD = '/forgot-password',

  PROFILE = '/profile',

  MANGA = `/manga`,
  ADD_MANGA = `${ROUTE.MANGA}/add`,
  EDIT_MANGA = `${ROUTE.MANGA}/edit`,

  CHAPTER = `/chapter`,
  ADD_CHAPTER = `${ROUTE.CHAPTER}/add`,
  EDIT_CHAPTER = `${ROUTE.CHAPTER}/edit`,

  ADMIN = '/admin',
  SET_ADMIN = `${ROUTE.ADMIN}/set-admin`,
}

// export const BasicRoutes = [
//   ROUTE.HOME,
//   ROUTE.SIGN_IN,
//   ROUTE.SIGN_UP,
//   ROUTE.CHANGE_PASSWORD,
//   ROUTE.FORGOT_PASSWORD,
// ];

// export const UserRoutes = [
//   ROUTE.PROFILE,
//   ROUTE.MANGA,
//   ROUTE.ADD_MANGA,
//   ROUTE.EDIT_MANGA,
//   ROUTE.CHAPTER,
//   ROUTE.ADD_CHAPTER,
//   ROUTE.EDIT_CHAPTER,
// ];

// export const AdminRoutes = [ROUTE.ADMIN, ROUTE.SET_ADMIN];

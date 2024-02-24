export const enum ROUTE {
  HOME = '/',
  PAGE_NOT_FOUND = '/404',

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

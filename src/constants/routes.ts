export const enum ROUTE {
  HOME = '/',
  PAGE_NOT_FOUND = '/404',

  USER = '/user',
  USER_PROFILE = `${ROUTE.USER}/profile`,
  USER_CONTINUE_READING = `${ROUTE.USER}/continue-reading`,
  USER_LIST = `${ROUTE.USER}/list`,

  MANGA = `/manga`,
  ADD_MANGA = `${ROUTE.MANGA}/add`,
  EDIT_MANGA = `${ROUTE.MANGA}/edit`,

  CHAPTER = `/chapter`,
  ADD_CHAPTER = `${ROUTE.CHAPTER}/add`,
  EDIT_CHAPTER = `${ROUTE.CHAPTER}/edit`,

  ADMIN = '/admin',
  SET_ADMIN = `${ROUTE.ADMIN}/set-admin`,
}

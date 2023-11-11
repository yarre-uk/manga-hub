import { ROUTE } from './routes';

export const UserPages = [ROUTE.WEATHER];
export const AdminPages = [ROUTE.ADMIN, ROUTE.ADD_ADMIN];
export const ValidatePages = UserPages.concat(AdminPages);

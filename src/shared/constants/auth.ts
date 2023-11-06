import Route from './routes';

export const UserPages = [Route.Weather];
export const AdminPages = [Route.Admin, Route.AddAdmin];
export const ValidatePages = UserPages.concat(AdminPages);

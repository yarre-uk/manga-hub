import { Role } from '../models/auth';

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken: string;
      refreshToken: string;
      role: Role;
    };
  }
  interface DefaultJWT {
    accessToken: string;
    refreshToken: string;
    role: Role;
  }
}

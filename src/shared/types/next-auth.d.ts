import { Role } from '../models/auth';

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken: string;
      refreshToken: string;
      id: number;
      role: Role;
    };
  }
}

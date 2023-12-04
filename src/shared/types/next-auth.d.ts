import { Role } from '../models/auth';
import { User } from '../models/user';

declare module 'next-auth' {
  interface Session {
    user: {
      data: User;
      accessToken: string;
      refreshToken: string;
      id: number;
      role: Role;
    };
  }
}

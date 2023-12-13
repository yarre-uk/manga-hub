/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from 'jwt-decode';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { User } from '@/shared/models/user';
import { Role } from '@/shared/types/auth';
import { axiosAuth } from '@/shared/utils/axios';

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        login: { label: 'Login', type: 'text' },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        try {
          const res = await axiosAuth.post('Auth/login', {
            login: credentials.login,
            password: credentials.password,
          });

          const user = res.data;

          if (!user) {
            return null;
          }

          const decoded: any = jwtDecode(user.accessToken);
          let role: Role;

          // TODO fix
          for (const prop in decoded) {
            if (prop.includes('role')) {
              role = decoded[prop];
            }
          }

          const { data } = await axiosAuth.get<User>(`User`, {
            headers: { Authorization: `Bearer ${res.data.accessToken}` },
            params: { userId: decoded.id },
          });

          return { ...user, role, id: decoded.id, data };
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger == 'update') {
        return { ...token, ...session.user };
      }

      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;

      return session;
    },
  },
};
export default NextAuth(authOptions);

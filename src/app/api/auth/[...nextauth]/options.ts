/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from 'jwt-decode';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { axiosAuth } from '@/shared/lib/axios';
import { Role } from '@/shared/models/auth';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const authOptions: AuthOptions = {
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
          const res = await axiosAuth.post('api/Auth/login', {
            login: credentials.login,
            password: credentials.password,
          });

          const user = res.data;

          if (!user) {
            return null;
          }

          const decoded = jwtDecode(user.accessToken);
          let role: Role;

          // TODO fix
          for (const prop in decoded) {
            if (prop.includes('role')) {
              role = decoded[prop];
            }
          }

          return { ...user, role };
        } catch (e) {
          console.error(`Error ${e}`);
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth, { AuthOptions } from 'next-auth';
// import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

import axios from '@/shared/lib/axios';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const authOptions: AuthOptions = {
  session: { strategy: 'jwt' },
  secret: 'Pn9CJbdUk6C9J8+lY6SlmFHkw4NItMpoHJ6ylIwEqrk=',
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        login: { label: 'Login', type: 'text', value: 'Admin' },
        password: {
          label: 'Password',
          type: 'password',
          value: 'admin231_rte',
        },
      },
      async authorize(credentials) {
        try {
          const res = await axios.post(
            'https://localhost:7142/api/Auth/login',
            {
              login: credentials.login,
              password: credentials.password,
            },
          );

          const user = res.data;

          if (user) {
            return user;
          } else {
            return null;
          }
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

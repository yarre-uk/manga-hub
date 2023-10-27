import './globals.css';

import { ReactNode } from 'react';

import Header from './Header';
import Providers from './Providers';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <div className={'  h-screen '}>{children}</div>
        </Providers>
      </body>
    </html>
  );
}

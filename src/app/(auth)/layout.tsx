import '../globals.css';

import { ReactNode } from 'react';

import Providers from '@/shared/components/Providers';
import { Toaster } from '@/shared/components/ui/toaster';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <Toaster />
          <div className="h-screen">{children}</div>
        </Providers>
      </body>
    </html>
  );
}

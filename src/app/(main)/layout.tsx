import '../globals.css';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

import Header from '@/shared/components/Header/Header';
import Providers from '@/shared/components/Providers';
const Sidebar = dynamic(
  () => import('@/shared/components/lib/Sidebar/Sidebar'),
  {
    ssr: false,
  },
);
import { Toaster } from '@/shared/components/ui/toaster';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <Header />
          <Toaster />
          <Sidebar />
          <div className="ml-[70px] h-[calc(100vh-56px)]">{children}</div>
        </Providers>
      </body>
    </html>
  );
}

import '../globals.css';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const Sidebar = dynamic(
  () => import('@/shared/components/lib/Sidebar/Sidebar'),
  {
    ssr: false,
  },
);
import { Header, Providers } from '@/shared/components';
import { Toaster } from '@/shared/components/ui/toaster';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <Header className="pl-[70px]" />
          <Toaster />
          <Sidebar />
          <div className="h-[calc(100vh-56px)] pl-[70px] pt-4">{children}</div>
        </Providers>
      </body>
    </html>
  );
}

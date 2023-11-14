import Image from 'next/image';
import Link from 'next/link';

import { NavbarData } from '@/shared/constants/navbar';

export default function Navbar() {
  return (
    <nav className="container flex h-10 items-center justify-between">
      <div className="flex flex-1 gap-6">
        {NavbarData.map(({ label, href }) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </div>
      <Image
        className="flex-0"
        src="/logo.svg"
        alt="logo"
        width={60}
        height={40}
      />
      <div className="flex-1">
        <Link className="flex items-center gap-2" href="#">
          <p>Profile</p>
          <span className="h-4 w-4 rounded-full bg-slate-600" />
        </Link>
      </div>
    </nav>
  );
}

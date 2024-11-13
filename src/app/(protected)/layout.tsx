import { redirect } from 'next/navigation';

import { isAuthenticated } from '@/auth/auth';
import { Menu } from '@/components/side/menu';

export default async function AppLayout({
  children,
  // sheet,
}: Readonly<{
  children: React.ReactNode;
  // sheet: React.ReactNode;
}>) {
  if (!(await isAuthenticated())) {
    redirect('/auth/sign-in');
  }

  return (
    <div className="flex min-h-screen">
      <Menu />
      {children}
      {/* {sheet} */}
    </div>
  );
}

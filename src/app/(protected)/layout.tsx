import { redirect } from 'next/navigation';

import { isAuthenticated } from '@/auth/auth';
import { Menu } from '@/components/side/menu';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

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
    <div className="relative flex min-h-screen">
      <Menu />
      <div className="flex-1">
        <Header />
        <div className="p-10 md:mb-2 md:h-[calc(100%-174px)] md:p-4">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import { Fira_Code as fontFireCode } from 'next/font/google';
import './globals.css';

const firaCode = fontFireCode({
  subsets: ['latin'],
  variable: '--font-fira-code',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Finances',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${firaCode.variable}  antialiased`}>{children}</body>
    </html>
  );
}

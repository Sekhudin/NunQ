import { Inter } from 'next/font/google';
import { cn } from 'src/packages/utils/cn';
import type { NextLayoutProps } from 'src/types/global';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({ children }: NextLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}>
        {children}
      </body>
    </html>
  );
}

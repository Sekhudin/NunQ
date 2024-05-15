import { Toaster } from 'packages/ui/sonner';
import ThemeProvider from 'components/providers/theme.provider';
import { cn } from 'packages/utils/cn';
import { inter } from 'packages/font/base.font';
import type { NextLayoutProps } from 'types/global';

const RootLayout = ({ children }: NextLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('h-dvh bg-background font-sans antialiased', inter.className)}>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

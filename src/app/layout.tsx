import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={plusJakarta.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

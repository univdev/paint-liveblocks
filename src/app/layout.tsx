import { LiveblocksProvider } from '@/components/Liveblocks/LiveblocksProvider';
import { MuiProvider } from '@/components/Mui/MuiProvider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/assets/normalize.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Paint with Liveblocks',
  description: 'Paint with Liveblocks',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MuiProvider>
          <LiveblocksProvider>{children}</LiveblocksProvider>
        </MuiProvider>
      </body>
    </html>
  );
}

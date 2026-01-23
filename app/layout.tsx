import type { Metadata } from 'next';
import { Press_Start_2P, Roboto_Mono } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';

const pressStart = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start'
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // you can choose the weights you need
  variable: '--robotoMono'
});

export const metadata: Metadata = {
  title: 'Phreaks CTF Team',
  description: 'Phreaks CTF Team - Cybersecurity enthusiasts from Tunisia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/Hilmi-z/pics-for-project/refs/heads/main/phreakss.png" sizes="32x32" />
      </head>
      <body className={`${pressStart.variable} ${robotoMono.variable} font-press-start bg-black text-white cursor-custom antialiased`}>
        {children}
      </body>
    </html>
  );
}
import './global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Логопеды из CHICAGA',
  description: 'Современный центр логопедии',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}

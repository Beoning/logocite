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
        <meta property="og:url" content="logocite.vercel.app" />
        <meta
          property="og:title"
          content="Официальный сайт Мастерской формирования чёткой речи ЛОГОПЕДОВ из CHICAGA"
        />
        <meta
          name="keywords"
          content="Логопед Логопеды Логопеды озерки Логопеды Академка Логопеды Академическая Логопеды Энгельса Логопед Науки Логопед Соколова Логопеды в СПб Логопедические услуги"
        />
        <meta
          property="og:description"
          content="Мастерская формирования чёткой речи ЛОГОПЕДОВ из CHICAGA усиленно работает над устранением любых ошибок в речи ребёнка, а также над формированием ясных мыслей и выразительной речи ребёнка."
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

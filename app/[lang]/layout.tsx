import { i18n } from "i18n-config";
import Head from "app/[lang]/head";
import "app/globals.css";

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default function Root({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  return (
    <html lang={params.lang}>
      <head>
        <Head />
      </head>
      <body>{children}</body>
    </html>
  );
}

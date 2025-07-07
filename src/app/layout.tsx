import type { Metadata } from "next";
import "./globals.css";
import { Header } from "$components/Header/Header";
import { Footer } from "$components/Footer/Footer";
import { ParticlesContainer } from '$components/particles/particles';
import { GTAGScript } from "$components/scripts/gtag";
import { YAMetrics } from "$components/scripts/yametrics";

export const metadata: Metadata = {
  title: "BZ Pravo | Главная | Разблокировка аккаунтов",
  description: "Разблокируем доступ к криптовалютным аккаунтам и банковским счетам",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='dark'>
    <GTAGScript />
    <YAMetrics />
    <body className='app'>
      <ParticlesContainer />
      <Header/>
      <section className='flex flex-1 flex-col'>
        {children}
      </section>
      <Footer/>
    </body>
    </html>
);
}

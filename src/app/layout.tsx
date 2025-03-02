import type { Metadata } from "next";
import "./globals.css";
import { Header } from "$components/Header/Header";
import { Footer } from "$components/Footer/Footer";

export const metadata: Metadata = {
  title: "Разблокировка аккаунтов",
  description: "Разблокируем доступ к криптовалютным аккаунтам и банковским счетам",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='dark'>
    <body className='app'>
      <Header/>
      <section className='flex flex-1 flex-col'>
        {children}
      </section>
      <Footer/>
    </body>
    </html>
);
}

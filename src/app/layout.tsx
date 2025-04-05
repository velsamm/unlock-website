import type { Metadata } from "next";
import "./globals.css";
import { Header } from "$components/header/header";
import { Footer } from "$components/footer/footer";

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
    <body>
      <Header />
      {children}
      <Footer />
    </body>
    </html>
);
}

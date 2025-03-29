import type { Metadata } from "next";
import "./globals.css";
import { Header } from "$components/header/header";
import { Footer } from "$components/footer/footer";

export const metadata: Metadata = {
  title: "БЗ Право",
  description: "БЗ Право. Поможем разблокировать доступ к криптовалютным аккаунтам и банковским счетам",
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

import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import PromoBanner from "./components/PromoBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



import StoreProvider from "./store/StoreProvider";

export const metadata: Metadata = {
  title: "Shop.co | Premium E-Commerce Store",
  description: "Shop.co offers an incredible selection of modern fashion, accessories, and top-tier electronics at the best prices online.",
  metadataBase: new URL('https://anglara-task-ten.vercel.app'),
};

const integralCFBold = localFont({
  src: '../public/fonts/integralcf-bold.otf',
        variable: "--font-integralcf-bold",
      })
const satoshiRegular = localFont({
  src: '../public/fonts/satoshi-regular.otf',
  variable: "--font-satoshi-regular",
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${integralCFBold.variable} ${satoshiRegular.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StoreProvider>
          <PromoBanner/>
          <Navbar/>
          {children}
          <Footer/>
        </StoreProvider>
      </body>
    </html>
  );
}

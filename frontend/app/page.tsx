import type { Metadata } from 'next';
import Home from "./Home";

export const metadata: Metadata = {
  title: "Shop.co | Best E-Commerce Store",
  description: "Browse Shop.co for the best fashion, tech, and accessories. Premium quality, best discounts, and fast worldwide delivery.",
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const dynamic = 'force-dynamic';

export default function page() {
  return (
    <Home/>
  );
}

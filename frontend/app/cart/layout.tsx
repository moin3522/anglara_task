import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Your Cart | Shop.co",
  description: "Review and securely checkout your selected products. Best prices and immediate delivery available.",
  alternates: {
    canonical: '/cart',
  },
  robots: {
    index: false,
    follow: false,
  }
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  );
}


import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Epiphany Scientific Club',
  description: 'Official website of Epiphany Scientific Club',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digital Garden',
  description: 'A collection of projects in coding, UX design, and crafting',
  icons: {
    icon: '/images/profile.png',
    apple: '/images/profile.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mei1kzs.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap" rel="stylesheet" />
        <style>{`
          body {
            font-family: "Playpen Sans", cursive;
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 
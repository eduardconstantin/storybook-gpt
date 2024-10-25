// app/layout.tsx

"use client"; // Keep this line to mark this as a Client Component

import './globals.css';
import { Inter } from 'next/font/google';
import Providers from './provider';
import React, { useEffect, useState } from 'react';
import { metadata } from './metadata'; // Import metadata from the new file

const inter = Inter({ subsets: ['latin'] });

// Fade-in animation for page load
const usePageTransition = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300); // Delay to create smooth fade-in
    return () => clearTimeout(timer);
  }, []);

  return isLoaded;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoaded = usePageTransition();

  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-[#151317] relative overflow-hidden`}>
        {/* Neon glow effect on the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 opacity-50 blur-3xl z-[-1]" />

        {/* Animated overlay for futuristic look */}
        <div className="absolute inset-0 bg-glow-gradient z-[-1] animate-glow" />

        {/* Content container with smooth fade-in effect */}
        <div className={`transition-opacity duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Providers>{children}</Providers>
        </div>

        {/* Animated futuristic lines on the sides */}
        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-indigo-500 to-purple-600 animate-line-move" />
        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-purple-600 to-indigo-500 animate-line-move" />
      </body>
    </html>
  );
}

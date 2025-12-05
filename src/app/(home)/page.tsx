'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative flex-1 flex flex-col justify-center items-center text-center h-full px-4 overflow-hidden bg-gray-100 dark:bg-transparent">
      {/* Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/overlay.png"
          alt=""
          fill
          className="object-cover opacity-30 invert dark:invert-0 dark:opacity-20"
        />
      </div>

      <h1 className="relative z-10 text-4xl md:text-6xl font-bold mb-6">
        AI Without the Overwhelm
      </h1>

      <Link
        href="/docs"
        className="relative z-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors mb-12"
      >
        Get Started
      </Link>

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="relative w-24 h-24 rounded-full ring-4 ring-blue-500 ring-offset-2 ring-offset-black overflow-hidden">
          <Image
            src="/images/mazin.jpg"
            alt="Mazin Salim"
            fill
            className="object-cover scale-[2.5] translate-y-[70%] translate-x-[10%]"
          />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Mazin Salim
        </p>
        <a
          href="https://www.linkedin.com/in/mazinsalim1/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 py-2 px-4 rounded-lg transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          <span className="text-sm">LinkedIn Profile</span>
        </a>
      </div>
    </div>
  );
}

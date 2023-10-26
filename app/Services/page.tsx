// pages/index.js
import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="min-h-screen">
        {/* Image Banner */}
        <div className="h-40 flex items-center justify-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/logo.png"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        {/* Content */}
        <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4 mt-10">
        <a href='/'>
          - Home
          </a>
        </h2>
          <h1 className="text-4xl font-bold mb-4">
            Services
          </h1>
          <li className="text-2xl font-bold mb-4 mt-16">
          PC Repairs
          </li>
          <p className="text-lg">
          bluh bluh bluhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        </p>
        <li className="text-2xl font-bold mb-4 mt-16">
        Desktop clean up
          </li>
          <p className="text-lg">
          bluh bluh bluhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        </p>
        <li className="text-2xl font-bold mb-4 mt-16">
        Custom PC Builds
          </li>
          <p className="text-lg">
          bluh bluh bluhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        </p>
        <li className="text-2xl font-bold mb-4 mt-16">
        Printer set up
          </li>
          <p className="text-lg">
          bluh bluh bluhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        </p>
        <li className="text-2xl font-bold mb-4 mt-16">
        Computer Cables
          </li>
          <p className="text-lg">
          bluh bluh bluhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        </p>
        <li className="text-2xl font-bold mb-4 mt-16">
        Tech set up
          </li>
          <p className="text-lg">
          bluh bluh bluhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        </p>
        <li className="text-2xl font-bold mb-4 mt-16">
        Operating System Install
          </li>
          <p className="text-lg">
          bluh bluh bluhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        </p>
        <li className="text-2xl font-bold mb-4 mt-16">
        Operating System Uptating
          </li>
          <p className="text-lg">
          bluh bluh bluhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        </p>
        <li className="text-2xl font-bold mb-4 mt-16">
        Office PCs and Gaming PCs
          </li>
          <p className="text-lg">
          bluh bluh bluhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        </p>
        <li className="text-2xl font-bold mb-4 mt-16">
        Physical PC Cleaning
          </li>
          <p className="text-lg">
          bluh bluh bluhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        </p>
        <li className="text-2xl font-bold mb-4 mt-16">
        Hardware upgrades
          </li>
          <p className="text-lg">
          bluh bluh bluhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        </p>
        </div>
      </div>
    </main>
  );
}

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
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        {/* Navigation Bar */}
        <nav className="bg-gray-800 text-white py-2">
          <div className="container mx-auto flex justify-end">
            <a href="/services" className="mr-4 hover:text-gray-300">
              Services
            </a>
            <a href="/contact" className="hover:text-gray-300">
              Contact Us
            </a>
          </div>
        </nav>

        {/* Content */}
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Your IT Company
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            sem non risus cursus fringilla. Pellentesque cursus odio eget justo
            volutpat, id viverra odio convallis. Suspendisse potenti. In hac
            habitasse platea dictumst.
          </p>
        </div>
      </div>
    </main>
  );
}

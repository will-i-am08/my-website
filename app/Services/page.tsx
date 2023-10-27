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
          <li className="text-2xl font-bold mb-4 mt-10">
          PC Repairs
          </li>
          <p className="text-lg">
          Repairs for PCs's and laptops for example Hardware replacements and Hardware Repairs
        </p>
        <li className="text-2xl font-bold mb-4 mt-10">
        Custom PC Builds
          </li>
          <p className="text-lg">
          Custom PC Builds for whatever you require if it be Gaming, editing or just for evryday use 
        </p>
        <li className="text-2xl font-bold mb-4 mt-10">
        Printer set up
          </li>
          <p className="text-lg">
          Printer set up for any brand and size of Printer 
        </p>
        <li className="text-2xl font-bold mb-4 mt-10">
        Computer Cables
          </li>
          <p className="text-lg">
          If your missing a Cable of any sort i Can supply you with a new one 
        </p>
        <li className="text-2xl font-bold mb-4 mt-10">
        Tech set up
          </li>
          <p className="text-lg">
          Setting up TV, Computers, consoles, etc 
        </p>
        <li className="text-2xl font-bold mb-4 mt-10">
        Operating System Install
          </li>
          <p className="text-lg">
          Installing Operating Systems on old or new PC/laptops 
        </p>
        <li className="text-2xl font-bold mb-4 mt-10">
        Operating System Uptating
          </li>
          <p className="text-lg">
          Updating Operating Systems in genaral or updating from windows 10 to 11 
        </p>
        <li className="text-2xl font-bold mb-4 mt-10">
        Office PCs and Gaming PC's
          </li>
          <p className="text-lg">
          Prebuilt Office and Gaming PC's 
        </p>
        <li className="text-2xl font-bold mb-4 mt-10">
        Physical PC Cleaning
          </li>
          <p className="text-lg">
          if your PC or Laptop is runing slow or hot than it probibly needs a cleen and some new Thermal paste 
        </p>
        <li className="text-2xl font-bold mb-4 mt-10">
        Hardware upgrades
          </li>
          <p className="text-lg">
          Hardware upgrades for PC's 
        </p>
        <p className="text-lg font-bold mb-4 mt-16">
        Contact for Prices 
          </p>
        </div>
      </div>
    </main>
  );
}

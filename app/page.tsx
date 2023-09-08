import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="min-h-screen">
      {/* Image Banner */}
      <div className="h-40 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="William Calder Computers Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to William Calder Computers 
        </h1>
        <p className="text-lg">
          Operating System Install building office and Gaming PCs fixing broken computers
          and seting up tech.
        </p>
        <h2 className="text-2xl font-bold mb-4 mt-16">
          What We Offer
        </h2>
        <li className="text-md">
          PC Repairs 
        </li>
        <li className="text-md">
          desktop clean up
        </li>
        <li className="text-md">
          Custom PC Builds
        </li>
        <li className="text-md">
          Printer set up 
        </li>
        <li className="text-md">
          Computer Cables
        </li>
        <li className="text-md">
          Tech set up
        </li>
        <li className="text-md">
          Operating System Install
        </li>
        <p className="text-lg mt-6">
          If there somthing that you need and is not listed here and just give me a call and tell you if i can do it or not 
        </p>
        <h2 className="text-2xl font-bold mb-4 mt-16">
          What We Offer
        </h2>
        </div>
      </div>
    </main>
  )
}

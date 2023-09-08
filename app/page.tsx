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
          This is my small tech company that I am starting up and will expand on in the future, if you are 
        </p>
        <p className="text-lg">
        interested in any of our services give us a call and we can give you some prices  
        </p>
        <h2 className="text-2xl font-bold mb-4 mt-16">
          What We Offer 
        </h2>
        <li className="text-md">
          PC Repairs 
        </li>
        <li className="text-md">
          Desktop clean up
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
        <li className="text-md">
          Operating System Uptating 
        </li>
        <li className="text-md">
          Office PCs and Gaming PCs
        </li>
        <p className="text-lg mt-6">
          If there somthing that you need and is not listed here and just give me a call and tell you if I can do it or not 
        </p>
        <h2 className="text-2xl font-bold mb-4 mt-16">
          Contact Us 
        </h2>
        <p className="text-lg mt-2">
          <a href='mailto:will@williamcalder.com.au'>
          Email - will@williamcalder.com.au
          </a>
        </p>
        <p className="text-lg mt-2">
          Phone - 0480 436 685 
        </p>
        </div>
      </div>
    </main>
  )
}

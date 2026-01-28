'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleShowMain = () => {
    router.push('/about');
  };

  return (
    <div id="intro" className="w-full h-screen flex flex-col items-center justify-center text-center bg-black text-white">
      <img 
        src="phreaky.png" 
        alt="Intro Image" 
        className="w-[150px] h-[150px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] object-cover border-2 border-black 
        rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl my-2.5 mb-10"
      />
      <div id="logo" className="text-2xl md:text-5xl animate-blink mb-4">
        Phr34k$
      </div>
      <br />
      <p className="my-6 leading-loose tracking-wider text-sm md:text-base">
        Welcome to Our CTF Team Page!
      </p>
      <br />
      <button 
        className="button bg-black text-white border-none px-5 py-2.5 cursor-pointer mb-10 mt-3 text-xs md:text-base font-mono transition-all hover:font-bold"
        onClick={handleShowMain}
      >
        More &gt;&gt;
      </button>
      <p className="fixed bottom-5 left-0 w-full text-center tracking-wider text-xs md:text-sm font-mono">
        Phr34k$ ♥ CTF
      </p>  
    </div>
  );
}
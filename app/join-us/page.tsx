'use client'; // Add this at the top of your page file
import Navbar from '@/components/Navbar';

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen">
        <div id="projects" className="page text-center px-5 py-10">
          <h2 className="text-2xl md:text-3xl mb-8 text-center">Join Us</h2>
          <p className="text-center leading-relaxed space-y-6 text-sm md:text-base">
            Fill the forun to become a Phreak!
          </p>
          <button 
  className='w-[120px] h-[40px] bg-white text-black mt-8 rounded-[5px] hover:bg-slate-300 transition-colors duration-200'
  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe07k47Sx0Uxej3AL8C3fl_8_Dqc-VG-0Es5iliFmfLw_K0rQ/viewform?usp=publish-editor', '_blank')}
>
            FORUM
          </button>
        </div>
      </div>
    </>
  );
}
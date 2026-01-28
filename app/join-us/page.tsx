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

          <div className="w-full flex justify-center px-4">
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSe07k47Sx0Uxej3AL8C3fl_8_Dqc-VG-0Es5iliFmfLw_K0rQ/viewform?embedded=true"
    className="w-full max-w-3xl h-[900px] rounded-xl border border-white/10 bg-black"
    frameBorder="0"
    marginHeight={0}
    marginWidth={0}
  >
    Loading…
  </iframe>
</div>
        </div>
      </div>
    </>
  );
}
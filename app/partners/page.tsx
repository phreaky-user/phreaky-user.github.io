import Navbar from '@/components/Navbar';

export default function CTFs() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen">
        <div id="CTFs" className="page text-center px-5 py-10">
          <h2 className="text-2xl md:text-3xl mb-8 text-center">Partners</h2>
          <p className="text-center leading-relaxed space-y-6 text-sm md:text-base">
            Information about our Partners goes here.
          </p>
        </div>
      </div>
    </>
  );
}
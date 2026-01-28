import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen">
        <div id="about" className="max-w-4xl mx-auto px-5 py-10">
          <h2 className="text-2xl md:text-3xl mb-8 text-center">About</h2>
          <div className="text-center leading-relaxed space-y-6 text-sm md:text-base">
            <p>
              Phreaks is a cybersecurity team based in Tunisia. You know, Phreaks are the OG hackers who sweet-talked phone lines into free calls, bending signals and breaking rules before hacking even hit the digital scene!
            </p>
            <p>
              We actively participate in online and on-site CTF competitions. We're a group of cybersecurity enthusiasts with interests in areas like DFIR, web security, cryptography, IoT security, and more.
            </p>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-8 mt-28">
            {/* CTFtime Icon */}
            {/* CTFtime Icon */}
<a
  href="https://ctftime.org/team/278448"
  target="_blank"
  rel="noopener noreferrer"
className="w-8 h-8 md:w-10 md:h-10 hover:drop-shadow-[0_0_6px_white] transition-all"
  aria-label="CTFtime"
>
 <img
  src="/ctftime-DFh-h_jq.png"
  alt="CTFtime"
  className="w-8 h-8 md:w-10 md:h-10"
/>
</a>


            {/* LinkedIn Icon */}
            <a 
              href="https://www.linkedin.com/company/phr34k" 
              target="_blank" 
              rel="noopener noreferrer"
className="w-8 h-8 md:w-10 md:h-10 hover:drop-shadow-[0_0_6px_white] transition-all"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Facebook Icon */}
            <a 
              href="https://www.facebook.com/profile.php?id=61556580966134" 
              target="_blank" 
              rel="noopener noreferrer"
className="w-8 h-8 md:w-10 md:h-10 hover:drop-shadow-[0_0_6px_white] transition-all"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
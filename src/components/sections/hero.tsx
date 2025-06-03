import { useRef, useState } from 'react';

export const Hero = () => {
  const containerRef = useRef(null);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const videoSources = ['/hero.mov', '/hero2.mov'];

  const handleVideoClick = () => {
    setIsClicked(true);                // Start the blur + shrink
    setTimeout(() => {
      setIsClicked(false);             // Remove blur + shrink after animation
      setVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    }, 300);                          // Match transition duration (300ms)
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20" ref={containerRef}>
      {/* ...background stuff omitted for brevity... */}

      <div className="container mx-auto px-16 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-up leading-[1.25]">
            <div className="pb-1 flex justify-center items-center gap-2 flex-wrap">
              <span className="bg-gradient-to-t from-[#1c00ff] to-[#00baff] bg-clip-text text-transparent">
                Sharp{' '}
                <video
                  src={videoSources[videoIndex]}
                  width={isClicked ? 52 : 55}
                  height={isClicked ? 52 : 55}
                  className={`inline-block rounded-md cursor-pointer -translate-y-1.5 relative ${isClicked ? 'blur-sm' : ''}`}
                  style={{ transition: 'filter 0.3s ease, width 0.3s ease, height 0.3s ease' }}
                  muted
                  playsInline
                  autoPlay
                  loop
                  disablePictureInPicture
                  controls={false}
                  onClick={handleVideoClick}
                />
                <span className="bg-gradient-to-t from-[#1c00ff] to-[#00baff] bg-clip-text text-transparent">
                  {''}Inds
                </span>
              </span>
            </div>

            {/* rest of your content */}
            <div className="pb-1 text-center">
              <span className="inline-block bg-gradient-to-t from-[#1c00ff] to-[#00baff] bg-clip-text text-transparent">
                Shaping Tomorrow
              </span>
            </div>
          </h1>
          <p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            Transforming Industries with Intelligent Solutions. We build AI powered tools that automate, optimize, and elevate operations driving innovation across sectors with smart, scalable
            technologies.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <a
              href="#about"
              className="px-8 py-3 rounded-full bg-[#2b00fe] text-[#000015] border border-[#2b00fe] hover:bg-white hover:text-[#2b00fe] transition-all duration-500 font-medium"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-[#2b00fe] text-[#2b00fe] hover:text-white hover:border-[#2b00fe] transition-all duration-500 font-medium hover:shadow-[0_0_20px_4px_#2b00fe]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

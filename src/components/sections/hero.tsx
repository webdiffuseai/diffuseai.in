import { useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import GradientText from '../effects/GradientText';


export const Hero = () => {
  const containerRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState('/hero.mov');
  const [isFading, setIsFading] = useState(false);

  const handleVideoClick = () => {
    setIsFading(true);
    setTimeout(() => {
      setVideoSrc(prev =>
        prev === '/hero.mov' ? '/hero2.mov' : '/hero.mov'
      );
      setIsFading(false);
    }, 300);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white" ref={containerRef}>
      {/* Blurred circular gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] via-[#00000000] to-[#00000000]"></div>


      {/* Decorative borders */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30 animate-rotate-slow pointer-events-none"></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-stellar-cyan/10 rounded-full opacity-20 pointer-events-none"
        style={{ animationDuration: '15s' }}
      ></div>

      {/* Main content */}
      <div className="text-center z-20 px-20">
        <GradientText
  colors={['#ff0000ff', '#0000ff']}
  animationSpeed={3}
  showBorder={false}
  className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.15] text-center mt-28" // remove size classes here
>
  <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.1] text-center">
    <span className="bg-gradient-to-b from-[#2b00fe] to-[#0f0086] text-transparent bg-clip-text">
      Sharp
    </span>{' '}
    <span
      className="inline-flex items-center justify-center align-middle w-[0.8em] h-[0.8em] relative overflow-hidden -translate-y-[3px]"
      style={{ lineHeight: '1em', verticalAlign: 'middle' }}
    >
<video
  key={videoSrc}
  src={videoSrc}
  autoPlay
  loop
  muted
  playsInline
  disablePictureInPicture
  controls={false}
  controlsList="nodownload nofullscreen noremoteplayback"
  onClick={handleVideoClick}
  style={{ boxShadow: '0 0 20pxrgb(255, 255, 255)' }}
  className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl border border-[#0f0086] cursor-pointer transition-opacity duration-300 ${
    isFading ? 'opacity-0' : 'opacity-100'
  }`}
/>


    </span>
    <span className="bg-gradient-to-b from-[#2b00fe] to-[#0f0086] text-transparent bg-clip-text align-middle">
      inds,
    </span>
    <br />
    <span className="bg-gradient-to-b from-[#2b00fe] to-[#0f0086] text-transparent bg-clip-text">
      Shaping Tomorrow
    </span>
  </h1>
</GradientText>


        {/* Description */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-[#0f0086] max-w-2xl mx-auto mb-10 sm:mb-20 animate-fade-up">
          Transforming Industries with Intelligent Solutions. We build AI powered tools that automate, optimize, and
          elevate operations driving innovation across sectors with smart, scalable technologies.
        </p>

        {/* Buttons */}
        <div
          className="mt-18 flex flex-col sm:flex-row justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '400ms' }}
        >
          <a
            href="#about"
            className="px-16 py-3 rounded-full bg-[#2b00fe] text-white border border-[#2b00fe] hover:bg-white hover:text-[#2b00fe] transition-all duration-500 font-medium"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-16 py-3 rounded-full border border-[#2b00fe] text-[#2b00fe] hover:text-[#2b00fe] hover:border-[#2b00fe] transition-all duration-1000 font-medium hover:shadow-[0_0_20px_4px_#2b00fe]"
          >
            Contact Us
          </a>
        </div>
      </div>

     
    </section>
  );
};

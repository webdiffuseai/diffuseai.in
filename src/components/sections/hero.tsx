
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-space-darker via-space-blue/50 to-space-purple/30"></div>
        
        {/* Blue orbital path */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-stellar-blue/20 rounded-full opacity-30 animate-rotate-slow"></div>
        
        {/* Inner orbital path */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-stellar-cyan/10 rounded-full opacity-20" style={{ animationDuration: '15s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center bg-white/5 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white/80 mb-8 animate-fade-down">
  <video
    className="h-12 rounded-md pointer-events-none select-none"
    src="hero.mov"
    autoPlay
    loop
    muted
    playsInline
    disablePictureInPicture
    controls={false}
    preload="auto"
    onContextMenu={(e) => e.preventDefault()}
  />
</div>



          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-up leading-tight">
            <span className="text-gradient">Sharp Minds, Shaping Tomorrow</span> 
            <br /> 
            
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
            Team of AI specialists develops bespoke solutions that empower organizations to harness the full potential of machine learning, computer vision, and natural language processing technologies.

          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
  <a
    href="#about"
    className="px-8 py-3 rounded-full bg-[#2b00fe] text-white border border-[#2b00fe] hover:bg-white hover:text-[#2b00fe] transition-all font-medium"
  >
    Learn More
  </a>
  <a
    href="#contact"
    className="px-8 py-3 rounded-full border border-[#2b00fe] text-[#2b00fe] hover:text-white hover:border-[#2b00fe] transition-all font-medium hover:shadow-[0_0_20px_4px_#2b00fe]"
  >
    Contact Us
  </a>
</div>




        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/80 hover:text-white transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative rounded-lg p-4 md:p-16 bg-[radial-gradient(ellipse_at_top_left,_#2b00fe_0%,_#0f0086_50%,_#090032_100%)] text-white shadow-[0_0_30px_rgba(43,0,254,0.2)] w-full overflow-hidden">
      {/* === GLOW & PARTICLE EFFECTS === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/15 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 left-1/3 w-60 h-60 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse-slower"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-700/20 rounded-full filter blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/4 right-1/3 w-40 h-40 bg-blue-500/10 rounded-full filter blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-50 h-50 bg-violet-600/15 rounded-full filter blur-2xl animate-float-slow"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute h-2 w-2 bg-blue-400 rounded-full top-1/4 left-1/5 animate-particle-1"></div>
        <div className="absolute h-1 w-1 bg-indigo-300 rounded-full top-1/3 right-1/4 animate-particle-2"></div>
        <div className="absolute h-2 w-2 bg-purple-400 rounded-full bottom-1/4 left-1/3 animate-particle-3"></div>
        <div className="absolute h-1 w-1 bg-blue-300 rounded-full bottom-1/3 right-1/5 animate-particle-2"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#090032] to-transparent z-10 rounded-t-lg pointer-events-none"></div>

      {/* === MAIN FOOTER CONTENT === */}
      <div className="relative z-20">
        <footer className="bg-black/70 py-6 md:py-10 px-4 md:px-8 border-t-9 border-[#2b00fe]/40 rounded-2xl shadow-[inset_0_0_30px_rgba(15,0,134,0.3)] backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              
              {/* --- BRAND & SOCIALS --- */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-4">
                  Diffuse<span className="text-[#2b00fe]">AI</span>
                </h3>
                <p className="text-white/70 mb-6 max-w-md mx-auto md:mx-0">
                  Crafting Tomorrow, One Algorithm at a Time
                </p>
                <div className="flex space-x-4 justify-center md:justify-start">
                  {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="text-white/60 p-2 rounded-full"
                      aria-label={social}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        {/* SVG paths remain same */}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* --- QUICK LINKS --- */}
              <div className="text-center md:text-left mt-6 md:mt-0">
                <h4 className="text-sm uppercase font-semibold text-white/50 tracking-wider mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {['About Us', 'Our Solutions', 'Our Team', 'Gallery', 'Contact'].map((link) => (
                    <li key={link}>
                      <Link 
                        to={`#${link.toLowerCase().replace(' ', '-')}`} 
                        className="text-white/70"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* --- CONTACT DETAILS --- */}
              <div className="mt-6 md:mt-0">
                <h4 className="text-sm uppercase font-semibold text-white/50 tracking-wider mb-4 text-center md:text-left">Contact</h4>
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">📞</span>
                    <span>+91 93618 60665</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">✉️</span>
                    <a href="mailto:infodiffuseai@gmail.com">
                      infodiffuseai@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>DiffuseAI Head Office</strong><br />
                      Near BDO Office, Thally, Hosur, Tamil Nadu - 635118
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>DiffuseAI Workspace</strong><br />
                      <span className="md:inline hidden">StepUP Incubation Cell, </span>Saveetha Incubation Foundation,<br className="hidden md:block" />
                      SIMATS Engineering, Chennai - 602105
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">🌐</span>
                    <a href="https://www.diffuseai.in" target="_blank" rel="noopener noreferrer">
                      www.diffuseai.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* --- COPYRIGHT --- */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5 text-center text-white/50 text-sm">
              <p>© {currentYear} DiffuseAI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* === ANIMATIONS === */}
      <style jsx>{`
        @keyframes float { 0%,100% { transform: translateY(0) translateX(0); } 25% { transform: translateY(-15px) translateX(15px); } 50% { transform: translateY(0) translateX(30px); } 75% { transform: translateY(15px) translateX(15px); } }
        @keyframes float-slow { 0%,100% { transform: translateY(0) translateX(0); } 25% { transform: translateY(-10px) translateX(-10px); } 50% { transform: translateY(0) translateX(-20px); } 75% { transform: translateY(10px) translateX(-10px); } }
        @keyframes particle-1 { 0%,100% { transform: translateY(0) translateX(0); opacity: 0.5; } 25% { transform: translateY(-100px) translateX(50px); opacity: 1; } 50% { transform: translateY(-200px) translateX(100px); opacity: 0.7; } 75% { transform: translateY(-300px) translateX(50px); opacity: 0.3; } }
        @keyframes particle-2 { 0%,100% { transform: translateY(0) translateX(0); opacity: 0.3; } 25% { transform: translateY(-50px) translateX(-70px); opacity: 0.7; } 50% { transform: translateY(-100px) translateX(-140px); opacity: 1; } 75% { transform: translateY(-150px) translateX(-70px); opacity: 0.7; } }
        @keyframes particle-3 { 0%,100% { transform: translateY(0) translateX(0); opacity: 0.4; } 25% { transform: translateY(70px) translateX(50px); opacity: 0.8; } 50% { transform: translateY(140px) translateX(100px); opacity: 1; } 75% { transform: translateY(70px) translateX(50px); opacity: 0.8; } }

        .animate-float { animation: float 15s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
        .animate-particle-1 { animation: particle-1 15s linear infinite; }
        .animate-particle-2 { animation: particle-2 12s linear infinite; }
        .animate-particle-3 { animation: particle-3 18s linear infinite; }
      `}</style>
    </div>
  );
};

export default Footer;
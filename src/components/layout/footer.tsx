import React from 'react';
import { Link } from 'react-router-dom';
import Aurora from '../effects/Aurora';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative bg-[linear-gradient(to_bottom,_#09003200,_#2b00fe00)] text-white w-full overflow-hidden p-4 md:p-20 mt-[-50px]">

      {/* === FOOTER CONTAINER with AURORA === */}
      <div className="relative rounded-2xl overflow-hidden border-t-9 border-[#2b00fe]/40 shadow-[inset_0_0_50px_rgba(15,0,134,0.3)] bg-[#000] z-10">

        {/* === Aurora inside the container === */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
          <Aurora />
        </div>



        {/* === MAIN FOOTER CONTENT === */}
        <div className="relative z-10 py-6 md:py-10 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

              {/* === Your Brand Section === */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-4">
                  Diffuse<span className="text-[#2b00fe]">AI</span>
                </h3>
                <p className="text-white/70 mb-6 max-w-md mx-auto md:mx-0">
                  Crafting Tomorrow, One Algorithm at a Time
                </p>
                <div className="flex space-x-4 justify-center md:justify-start">
                  {['LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                    <a key={social} href="#" className="text-white/60 p-2 rounded-full" aria-label={social}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* === Quick Links === */}
              <div className="text-center md:text-left mt-6 md:mt-0">
                <h4 className="text-sm uppercase font-semibold text-white/50 tracking-wider mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {['About Us', 'Our Solutions', 'Our Team', 'Gallery', 'Contact', 'Brand Guidelines'].map((link) => (
                    <li key={link}>
                      <Link to={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/70">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* === Contact Section === */}
              <div className="mt-6 md:mt-0">
                <h4 className="text-sm uppercase font-semibold text-white/50 tracking-wider mb-4 text-center md:text-left">Contact</h4>
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-start">
                    <span className="mr-2 mt-0">🕿</span>
                    <span>+91 93618 60665</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0">✉</span>
                    <a href="mailto:infodiffuseai@gmail.com">infodiffuseai@gmail.com</a>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="mr-2 mt-16">DiffuseAI Head Office</strong><br />
                      Near BDO Office, Thally, Hosur, Tamil Nadu - 635118
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>DiffuseAI Workspace</strong><br />
                      Saveetha Incubation Foundation, SIMATS Engineering<br />
                      Chennai - 602105
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0">🌐</span>
                    <a href="https://www.diffuseai.in" target="_blank" rel="noopener noreferrer">
                      www.diffuseai.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* COPYRIGHT */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 text-center text-white/50 text-sm">
              <p>© {currentYear} DiffuseAI. All rights reserved.</p>
            </div>
          </div>
        </div>

        {/* === Animations (Keep as is) === */}
      </div>
    </div>
  );
};

export default Footer;

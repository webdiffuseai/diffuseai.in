import { Link } from 'react-router-dom';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="relative rounded-lg p-16 bg-[radial-gradient(ellipse_at_top_left,_#2b00fe_0%,_#0f0086_50%,_#090032_100%)] text-white shadow-[0_0_30px_rgba(43,0,254,0.2)] w-full overflow-hidden">
      
      {/* === PULSING GLOW EFFECT === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-700/15 rounded-full filter blur-3xl animate-pulse-slower"></div>
      </div>

      {/* === TOP BLUR OVERLAY === */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#090032] to-transparent z-10 rounded-t-lg pointer-events-none"></div>
  
      {/* === CONTENT === */}
      <div className="relative z-20">
        <footer className="bg-black/70 py-10 px-2 border-t-9 border-[#2b00fe]/40 rounded-2xl shadow-[inset_0_0_30px_rgba(15,0,134,0.3)] backdrop-blur-sm">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* --- Logo & Socials --- */}
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Diffuse<span className="text-[#2b00fe]">AI</span>
                </h3>
                <p className="text-white/70 mb-6 max-w-md">
                  Crafting Tomorrow, One Algorithm at a Time
                </p>
                <div className="flex space-x-4">
                  {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="text-white/60 hover:text-[#2b00fe] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_#2b00fe] p-2 rounded-full"
                      aria-label={social}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        {social === 'LinkedIn' ? (
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        ) : social === 'Twitter' ? (
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        ) : (
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* --- Quick Links --- */}
              <div>
                <h4 className="text-sm uppercase font-semibold text-white/50 tracking-wider mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {['About Us', 'Our Solutions', 'Our Team', 'Gallery', 'Contact'].map((link) => (
                    <li key={link}>
                      <Link 
                        to={`#${link.toLowerCase().replace(' ', '-')}`} 
                        className="text-white/70 hover:text-[#2b00fe] transition-all duration-300 hover:pl-2 hover:font-medium hover:shadow-[0_0_10px_#2b00fe]"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* --- Contact --- */}
              <div>
                <h4 className="text-sm uppercase font-semibold text-white/50 tracking-wider mb-4">Contact</h4>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start group">
                    <span className="mr-2 mt-1 group-hover:text-[#2b00fe] transition-all">📞</span>
                    <span className="group-hover:text-[#2b00fe] group-hover:underline">+91 8122211194</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="mr-2 mt-1 group-hover:text-[#2b00fe] transition-all">✉️</span>
                    <a 
                      href="mailto:info@diffuseai.com" 
                      className="hover:text-[#2b00fe] hover:underline transition-all"
                    >
                      info@diffuseai.com
                    </a>
                  </li>
                  <li className="flex items-start group">
                    <span className="mr-2 mt-1 group-hover:text-[#2b00fe] transition-all">🌐</span>
                    <a 
                      href="https://www.diffuseai.in" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-[#2b00fe] hover:underline transition-all"
                    >
                      www.diffuseai.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* === COPYRIGHT === */}
            <div className="mt-12 pt-8 border-t border-white/5 text-center text-white/50 text-sm">
              <p>© {currentYear} DiffuseAI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
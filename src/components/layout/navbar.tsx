import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Projects', href: 'Projects' },
    { title: 'Achievments', href: '/achievments' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out py-4',
        isScrolled ? 'backdrop-blur-xl bg-space-dark/10  0 py-3 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
        <span className="font-bold text-xl text-black hover:opacity-80 transition-opacity font-montserrat">
  Diffuse<span className="text-[#2b00fe]">AI</span>
</span>

        </Link>

        {/* Desktop Nav + Contact */}
        <div className="hidden md:flex items-center justify-between w-full ml-10">
          {/* Centered Nav Links */}
          <div className="flex-1 flex justify-center space-x-8">
            {navLinks.map((link, index) =>
              link.href.startsWith('/#') ? (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm font-medium text-[#2b00fe] hover:text-[#2b00fe] transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[40px] after:bg-[#2b00fe] after:scale-x-0 hover:after:scale-x-200 after:transition-transform after:duration-300"
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  key={index}
                  to={link.href}
                  className="text-sm font-medium text-[#000000] hover:text-[#000000] transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#2b00fe] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {link.title}
                </Link>
              )
            )}
          </div>

          {/* Contact Button */}
          <div className="flex items-center">
  <a
    href="/#contact"
    className="group px-4 py-2 rounded-full border border-[#2b00fe] bg-white hover:bg-[#2b00fe] hover:shadow-[0_0_25px_#2b00fe] transition-all duration-300 text-sm font-bold font-montserrat"
  >
    <span className="bg-gradient-to-b from-[#2b00fe] to-[#0f0086] bg-clip-text text-transparent group-hover:text-white group-hover:bg-none transition-all duration-300">
      Contact Us ↝
    </span>
  </a>
</div>






        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-morphism animate-fade-down">
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) =>
              link.href.startsWith('/#') ? (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/80 hover:text-white py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  key={index}
                  to={link.href}
                  className="text-white/80 hover:text-white py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              )
            )}
            <a
              href="/#contact"
              className="px-4 py-2 rounded-full border border-stellar-blue text-stellar-blue hover:bg-stellar-blue/50 transition-colors text-sm font-medium self-start"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

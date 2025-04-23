import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section id="header" className="fixed z-50 left-0 top-0 w-screen h-auto">
      <div className="min-h-[8vh] bg-[rgba(31,30,30,0.24)] backdrop-blur-sm transition-colors duration-300">
        <div className="flex items-center justify-between w-full h-full max-w-[1300px] px-4 mx-auto">
          <div className="brand">
            <a href="#hero">
              <h1 className="text-3xl uppercase text-white">
                <span className="text-crimson">A</span>mit{' '}
                <span className="text-crimson">R</span>ana
              </h1>
            </a>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden h-[60px] w-[60px] border-3 border-white rounded-full flex items-center justify-center cursor-pointer transform scale-90 mr-5"
            >
              {isMenuOpen ? (
                <X className="text-white h-8 w-8" />
              ) : (
                <Menu className="text-white h-8 w-8" />
              )}
            </button>
            
            <nav className={`${isMenuOpen ? 'left-0' : 'left-full'} lg:static fixed bg-[rgb(31,30,30)] lg:bg-transparent w-screen h-screen lg:w-auto lg:h-auto top-0 flex flex-col lg:flex-row justify-center items-center z-10 transition-all duration-500`}>
              <ul className="flex flex-col lg:flex-row items-center">
                {['Home', 'Education', 'Projects', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-2xl lg:text-lg font-medium tracking-wider text-white uppercase py-5 px-8 block hover:text-crimson transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
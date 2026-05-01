import { useState, useEffect } from 'react';

function Sidebar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-black/95 backdrop-blur-md py-0 shadow-lg'
                : 'bg-black/90 backdrop-blur-sm py-2'
            } border-b border-white/10`}>

            {/* SECTION 1: Top bar - Social + Address + Language */}
            <div className={`border-b border-white/10 transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 opacity-0 border-0' : 'h-auto opacity-100'
                }`}>
                <div className="container mx-auto px-4 py-3">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/elnacionalbcn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c4a747] transition-all duration-300 hover:scale-110"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook-f text-white text-sm"></i>
                            </a>
                            <a
                                href="https://instagram.com/elnacionalbcn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c4a747] transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram text-white text-sm"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/el-nacional-bcn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c4a747] transition-all duration-300 hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin text-white text-sm"></i>
                            </a>
                        </div>

                        {/* Address */}
                        <div className="text-white/80 text-sm">
                            <a
                                href="https://maps.app.goo.gl/DvztXX4DnNSDGTFA7"
                                className="hover:text-[#c4a747] transition-colors"
                            >
                                <i className="fas fa-map-marker-alt mr-2 text-[#c4a747]"></i>
                                Vangaindrano, 24 bis 08007
                            </a>
                        </div>

                        {/* Right Menu */}
                        <div className="flex gap-6">
                            <a
                                href="/how-to-reach-us"
                                className="text-white/80 hover:text-[#c4a747] transition-colors text-sm"
                            >
                                <i className="fas fa-directions mr-1"></i> How to reach us
                            </a>
                            <div className="flex gap-3 text-sm border-l border-white/20 pl-6">
                                <a href="/es" className="text-white/60 hover:text-[#c4a747] transition-colors">ESP</a>
                                <a href="/ca" className="text-white/60 hover:text-[#c4a747] transition-colors">CAT</a>
                                <a href="/en" className="text-[#c4a747] font-medium">EN</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: Main Logo
      <div className={`transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-6'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <a href="/" className="inline-block group">
              <img 
                src="acc1.jpg" 
                alt="El Nacional Barcelona" 
                className={`transition-all duration-500 ${
                  isScrolled ? 'h-10 md:h-12' : 'h-16 md:h-20'
                } w-auto group-hover:opacity-80`}
              />
            </a>
          </div>
        </div>
      </div> */}

            {/* SECTION 3: Main Navigation */}
            <div className={`border-t border-white/10 transition-all duration-500 ${isScrolled ? 'py-1' : 'py-0'
                }`}>
                <div className="container mx-auto px-4">
                    {/* Mobile menu button */}
                    <div className="md:hidden flex justify-center py-3">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2 hover:text-[#c4a747] transition-colors"
                            aria-label="Menu"
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block py-4 md:py-2`}>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                            {/* Left Menu */}
                            <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
                                <a
                                    href="/the-restaurant"
                                    className="text-white hover:text-[#c4a747] transition-colors text-xs md:text-sm uppercase tracking-wide font-medium relative group"
                                >
                                    
                                    Le restaurant
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c4a747] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                                <a
                                    href="/the-areas"
                                    className="text-white hover:text-[#c4a747] transition-colors text-xs md:text-sm uppercase tracking-wide font-medium relative group"
                                >
                                    la région
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c4a747] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                                <div className="relative group">
                                    <a
                                        href="/gallery"
                                        className="text-white hover:text-[#c4a747] transition-colors text-xs md:text-sm uppercase tracking-wide font-medium flex items-center gap-1"
                                    >
                                        Gallery
                                        <i className="fas fa-chevron-down text-[10px]"></i>
                                    </a>
                                    {/* Dropdown menu */}
                                    <div className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-md rounded-md p-2 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl">
                                        <a href="/image-gallery" className="block px-4 py-2 text-white/80 hover:text-[#c4a747] hover:bg-white/5 text-sm rounded">
                                            <i className="fas fa-image mr-2"></i> Image Gallery
                                        </a>
                                        <a href="/video-gallery" className="block px-4 py-2 text-white/80 hover:text-[#c4a747] hover:bg-white/5 text-sm rounded">
                                            <i className="fas fa-video mr-2"></i> Movies
                                        </a>
                                    </div>
                                </div>
                            </nav>

                            {/* Small logo that appears when scrolled */}
                            <div className={`transition-all duration-500 ${isScrolled ? 'opacity-100 visible' : 'opacity-0 invisible hidden md:block'
                                }`}>
                                <img
                                    src="https://www.elnacionalbcn.com/wp-content/uploads/2018/10/logo_p_transparent.png"
                                    alt="El Nacional"
                                    className="h-8 md:h-10 w-auto"
                                />
                            </div>

                            {/* Right Menu */}
                            <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
                                <a
                                    href="/gift-card"
                                    className="text-white hover:text-[#c4a747] transition-colors text-xs md:text-sm uppercase tracking-wide font-medium relative group"
                                >
                                   carte-cadeau
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c4a747] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                                <a
                                    href="/reservation"
                                    className="text-white hover:text-[#c4a747] transition-colors text-xs md:text-sm uppercase tracking-wide font-medium relative group"
                                >
                                    Reservation
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c4a747] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                                <a
                                    href="/groups"
                                    className="text-white hover:text-[#c4a747] transition-colors text-xs md:text-sm uppercase tracking-wide font-medium relative group"
                                >
                                    Groups
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c4a747] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Sidebar;
import { useState, useEffect } from 'react';
import Sidebar from '../component/layout/sidebar';

function TheAreas() {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) setHeaderHeight(header.offsetHeight);
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    window.addEventListener('scroll', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      window.removeEventListener('scroll', updateHeaderHeight);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Sidebar />

      <main style={{ paddingTop: `${headerHeight}px` }}>

        {/* BACKGROUND */}
        <div
          className="fixed inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: "url('/areas-bg.jpg')" }}
        />
        <div className="fixed inset-0 bg-black/70 -z-10" />

        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-5xl uppercase text-white font-bold mb-4 tracking-wide">
              la région
            </h1>
            <div className="w-12 h-[2px] bg-[#c4a747] mx-auto mb-6"></div>
            <p className="text-white/80 max-w-xl text-sm md:text-base">
              There are 4 specialised bars and 4 culinary areas at your disposal. The choice is yours.
            </p>
          </div>
        </section>

        {/* RESTAURANTS SECTION - sans espace, images 16/9 */}
        <section className="w-full">
          <div className="w-full">
            <h2 className="text-[#c4a747] text-3xl text-center uppercase mb-8 font-semibold tracking-wide pt-16">
              Restaurants
            </h2>
            <p className="text-white/70 text-center max-w-2xl mx-auto mb-8 text-sm">
              With the same standards for service and quality set by El Nacional, the restaurant is divided into 4 areas, offering enormous culinary variety.
            </p>

            {/* LIGNE 1 - 2 RESTAURANTS en 16/9 */}
            <div className="grid grid-cols-2 gap-0">
              <div className="group relative aspect-video overflow-hidden cursor-pointer">
                <div className="bg-white p-0 transition-all duration-300 group-hover:p-1 group-hover:shadow-2xl h-full">
                  <div className="relative h-full w-full overflow-hidden">
                    <img src="/rest1.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex flex-col items-center justify-center text-center px-4">
                      <div className="text-[#c4a747] text-2xl mt-2">···</div>
                      <p className="text-white/80 mt-4 text-sm max-w-xs">
                        In our meat restaurant, the charcoal grill is the star, although there is also a wood-fired oven and a griddle.
                      </p>
                      <a href="/mariage" className="mt-6 text-[#c4a747] hover:text-white text-sm uppercase tracking-wider transition">
                        [SEE MORE]
                      </a>
                      <h3 className="text-white text-2xl md:text-3xl uppercase font-bold tracking-wider">Mariage</h3>
                      <h3 className="text-white text-2xl md:text-3xl uppercase font-bold tracking-wider">-</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative aspect-video overflow-hidden cursor-pointer">
                <div className="bg-white p-0 transition-all duration-300 group-hover:p-1 group-hover:shadow-2xl h-full">
                  <div className="relative h-full w-full overflow-hidden">
                    <img src="/rest2.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex flex-col items-center justify-center text-center px-4">
                      <div className="text-[#c4a747] text-2xl mt-2">···</div>
                      <p className="text-white/80 mt-4 text-sm max-w-xs">
                        Restaurant specialised in griddled, baked, grilled and steamed fish.
                      </p>
                      <a href="/famille" className="mt-6 text-[#c4a747] hover:text-white text-sm uppercase tracking-wider transition">
                        [SEE MORE]
                      </a>
                      <h3 className="text-white text-2xl md:text-3xl uppercase font-bold tracking-wider">Famille</h3>
                      <h3 className="text-white text-2xl md:text-3xl uppercase font-bold tracking-wider">-</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LIGNE 2 - 2 RESTAURANTS en 16/9 */}
            <div className="grid grid-cols-2 gap-0">
              <div className="group relative aspect-video overflow-hidden cursor-pointer">
                <div className="bg-white p-0 transition-all duration-300 group-hover:p-1 group-hover:shadow-2xl h-full">
                  <div className="relative h-full w-full overflow-hidden">
                    <img src="/rest3.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex flex-col items-center justify-center text-center px-4">
                      <div className="text-[#c4a747] text-2xl mt-2">···</div>
                      <p className="text-white/80 mt-4 text-sm max-w-xs">
                        Taste our exquisite tapas and enjoy a wide range of flavors from the local cuisine.
                      </p>
                      <a href="/reunion" className="mt-6 text-[#c4a747] hover:text-white text-sm uppercase tracking-wider transition">
                        [SEE MORE]
                      </a>
                      <h3 className="text-white text-2xl md:text-3xl uppercase font-bold tracking-wider">Reunion</h3>
                      <h3 className="text-white text-2xl md:text-3xl uppercase font-bold tracking-wider">-</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative aspect-video overflow-hidden cursor-pointer">
                <div className="bg-white p-0 transition-all duration-300 group-hover:p-1 group-hover:shadow-2xl h-full">
                  <div className="relative h-full w-full overflow-hidden">
                    <img src="/rest4.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex flex-col items-center justify-center text-center px-4">
                      <div className="text-[#c4a747] text-2xl mt-2">···</div>
                      <p className="text-white/80 mt-4 text-sm max-w-xs">
                        As the name suggests, a place to stop and take a break.
                      </p>
                      <a href="/fiance" className="mt-6 text-[#c4a747] hover:text-white text-sm uppercase tracking-wider transition">
                        [SEE MORE]
                      </a>
                      <h3 className="text-white text-2xl md:text-3xl uppercase font-bold tracking-wider">Fiance</h3>
                      <h3 className="text-white text-2xl md:text-3xl uppercase font-bold tracking-wider">-</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BARS SECTION - sans espace, images 16/9 */}
        <section className="w-full bg-black/30">
          <div className="w-full">
            <h2 className="text-[#c4a747] text-3xl text-center uppercase mb-8 font-semibold tracking-wide pt-16">
              Bars
            </h2>
            <p className="text-white/70 text-center max-w-2xl mx-auto mb-8 text-sm">
              Along with the culinary areas, there are 4 specialised bars. A meeting point before being seated at one of the restaurants, or a place to enjoy a cocktail.
            </p>

            {/* LIGNE 1 - 2 BARS en 16/9 */}
            <div className="grid grid-cols-2 gap-0">
              <div className="group relative aspect-video overflow-hidden cursor-pointer">
                <div className="bg-white p-0 transition-all duration-300 group-hover:p-1 group-hover:shadow-2xl h-full">
                  <div className="relative h-full w-full overflow-hidden">
                    <img src="/bar2.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex flex-col items-center justify-center text-center px-4">
                      <div className="text-[#c4a747] text-3xl mt-2">···</div>
                      <p className="text-white/80 mt-4 text-sm">Discover an excellent beer bar in Barcelona to enjoy a few pints.</p>
                      <a href="/cervezas" className="mt-6 text-[#c4a747] hover:text-white text-sm uppercase tracking-wider transition">
                        [SEE MORE]
                      </a>
                      <h3 className="text-white text-3xl md:text-4xl uppercase font-bold tracking-wider">CERVEZAS</h3>
                      <h3 className="text-white text-3xl md:text-4xl uppercase font-bold tracking-wider">-</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative aspect-video overflow-hidden cursor-pointer">
                <div className="bg-white p-0 transition-all duration-300 group-hover:p-1 group-hover:shadow-2xl h-full">
                  <div className="relative h-full w-full overflow-hidden">
                    <img src="/bar1.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex flex-col items-center justify-center text-center px-4">
                      <div className="text-[#c4a747] text-3xl mt-2">···</div>
                      <p className="text-white/80 mt-4 text-sm">Go ahead and try our wide range of high quality reserve wines.</p>
                      <a href="/vinos" className="mt-6 text-[#c4a747] hover:text-white text-sm uppercase tracking-wider transition">
                        [SEE MORE]
                      </a>
                      <h3 className="text-white text-3xl md:text-4xl uppercase font-bold tracking-wider">VINOS</h3>
                      <h3 className="text-white text-3xl md:text-4xl uppercase font-bold tracking-wider">-</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LIGNE 2 - 2 BARS en 16/9 */}
            <div className="grid grid-cols-2 gap-0">
              <div className="group relative aspect-video overflow-hidden cursor-pointer">
                <div className="bg-white p-0 transition-all duration-300 group-hover:p-1 group-hover:shadow-2xl h-full">
                  <div className="relative h-full w-full overflow-hidden">
                    <img src="/bar3.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex flex-col items-center justify-center text-center px-4">
                      <div className="text-[#c4a747] text-3xl mt-2">···</div>
                      <p className="text-white/80 mt-4 text-sm">An ideal meeting point where you can enjoy this exquisite shellfish.</p>
                      <a href="/ostras" className="mt-6 text-[#c4a747] hover:text-white text-sm uppercase tracking-wider transition">
                        [SEE MORE]
                      </a>
                      <h3 className="text-white text-3xl md:text-4xl uppercase font-bold tracking-wider">OSTRAS</h3>
                      <h3 className="text-white text-3xl md:text-4xl uppercase font-bold tracking-wider">-</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative aspect-video overflow-hidden cursor-pointer">
                <div className="bg-white p-0 transition-all duration-300 group-hover:p-1 group-hover:shadow-2xl h-full">
                  <div className="relative h-full w-full overflow-hidden">
                    <img src="/bar4.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex flex-col items-center justify-center text-center px-4">
                      <div className="text-[#c4a747] text-3xl mt-2">···</div>
                      <p className="text-white/80 mt-4 text-sm">Come and enjoy yourself at our cocktail bar, both by day and night.</p>
                      <a href="/cocteles" className="mt-6 text-[#c4a747] hover:text-white text-sm uppercase tracking-wider transition">
                        [SEE MORE]
                      </a>
                      <h3 className="text-white text-3xl md:text-4xl uppercase font-bold tracking-wider">CÓCTELES</h3>
                      <h3 className="text-white text-3xl md:text-4xl uppercase font-bold tracking-wider">-</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEPARATOR AND BOOK BUTTON */}
        <section className="relative py-16">
          <div className="relative z-10 px-8 max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex-1 h-px bg-white/20"></div>
              <h2 className="text-xl md:text-2xl font-bold tracking-wider text-white">
                THE AREAS
              </h2>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>

            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              With the same standards for service and quality set by El Nacional, the restaurant is divided into 4 areas, offering enormous culinary variety.
            </p>

            <button className="bg-[#c4a747] text-black px-10 py-3 font-bold text-lg hover:bg-[#a88935] transition-all duration-300 uppercase tracking-wider">
              BOOK HERE
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}

export default TheAreas;
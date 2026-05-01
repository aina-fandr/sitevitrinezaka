import { useState, useEffect } from 'react';
import Sidebar from '../component/layout/sidebar';

function Accueil() {
    const [count, setCount] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const updateHeaderHeight = () => {
            const header = document.querySelector('header');
            if (header) {
                setHeaderHeight(header.offsetHeight);
            }
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
                {/* Background Image principale */}
                <div
                    className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"

                />

                {/* Dark Overlay principal */}
                <div className=" fixed inset-0 bg-black/60 -z-10" />

                {/* Hero Content */}
                <div style={{ backgroundImage: "url('acc1.jpg')" }} className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-8 py-16">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-4 text-white">
                            RESTO EZAKA
                        </h1>
                        <div className="w-24 h-0.5 bg-[#c4a747] mx-auto my-6"></div>
                        <p className="text-xl md:text-2xl text-[#c4a747] mb-16">
                            Authentic Malgache Cuisine and Etrangere
                        </p>

                        {/* Info Bar */}
                        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-white/80">
                            <div className="flex items-center gap-2">
                                <i className="fas fa-clock text-[#c4a747]"></i>
                                <span>Open Every day</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fas fa-map-marker-alt text-[#c4a747]"></i>
                                <span>Passeig de Gràcia, 24 bis</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fas fa-phone text-[#c4a747]"></i>
                                <span>+34 123 456 789</span>
                            </div>
                        </div>

                        {/* Reservation Button */}
                        <button
                            onClick={() => setCount((count) => count + 1)}
                            className="bg-[#c4a747] text-black px-10 py-4 font-bold text-lg hover:bg-[#a88935] transition-all duration-300 uppercase tracking-wider rounded-lg inline-flex items-center gap-3"
                        >
                            <i className="fas fa-calendar-check"></i>
                            RESERVATION
                            <span className="bg-black/20 px-2 py-0.5 rounded text-sm">
                                {count}
                            </span>
                        </button>
                    </div>
                </div>
            </main>

            {/* Section THE AREAS */}
            <section  className=" min-h-screen relative py-12 bg-black">
                <div className="relative z-10 px-4 max-w-6xl mx-auto">
                    {/* Titre THE AREAS */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl uppercase font-bold tracking-wide text-white mb-3">
                            LA RÉGION
                        </h2>
                        <div className="w-12 h-0.5 bg-[#c4a747] mx-auto mb-4"></div>
                        <p className="text-lg md:text-xl text-white mb-2">What do you fancy today?</p>
                        <p className="text-white/70 text-sm max-w-2xl mx-auto">
                            Without leaving the establishment, you have 4 culinary areas and 4 specialised bars to choose from.
                        </p>
                    </div>

                    {/* Bars Section */}
                    <div className="mb-10">
                        <h3 className="text-2xl text-[#c4a747] text-center mb-6 font-semibold">Bars</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { name: "CERVEZAS", image: "/bar2.jpg" },
                                { name: "VINOS", image: "/bar1.jpg" },
                                { name: "OSTRAS", image: "/bar3.jpg" },
                                { name: "CÓCTELES", image: "/bar4.jpg" }
                            ].map((item, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <div className="bg-white p-0.5 shadow">
                                        <div className="relative overflow-hidden aspect-[16/9]">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                                onError={(e) => {
                                                    e.target.src = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400";
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                                <div className="text-center">
                                                    <h4 className="text-white font-semibold text-sm md:text-base uppercase tracking-wider transition-all duration-300 group-hover:scale-105">
                                                        {item.name}
                                                    </h4>
                                                    <div className="w-0 h-[2px] bg-white mt-2 mx-auto transition-all duration-300 group-hover:w-8"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Restaurants Section */}
                    <div>
                        <h3 className="text-2xl text-[#c4a747] text-center mb-6 font-semibold">Restaurants</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { name: "Mariage", image: "/rest1.jpg" },
                                { name: "Famille", image: "/rest2.jpg" },
                                { name: "Reunion", image: "/rest3.jpg" },
                                { name: "Fiance", image: "/rest4.jpg" }
                            ].map((item, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <div className="bg-white p-0.5 shadow">
                                        <div className="relative overflow-hidden aspect-[16/9]">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                                onError={(e) => {
                                                    e.target.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400";
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                                <div className="text-center">
                                                    <h4 className="text-white font-semibold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 group-hover:scale-105">
                                                        {item.name}
                                                    </h4>
                                                    <div className="w-0 h-[2px] bg-white mt-2 mx-auto transition-all duration-300 group-hover:w-8"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Accueil;
// Import des images
import mariageImg from '../assets/service/concer.jpeg';
import anniversaireImg from '../assets/service/mariage3.jpeg';
import concert1 from '../assets/service/concer1.jpeg';
import concert2 from '../assets/service/concer2.jpeg';
import concert3 from '../assets/service/concer3.jpeg';
import chambreImg from '../assets/service/mariage1.jpeg';
import salleImg from '../assets/service/mariage2.jpeg';
import Sidebar from '../component/layout/sidebar';

const Services = () => {
  return (

    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 font-['Poppins']">
            <Sidebar />
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl text-[#2c1810] font-['Playfair_Display'] mb-2">Nos Services</h1>
        <p className="text-gray-500">Découvrez nos espaces et prestations</p>
        <div className="text-[#d4af37] text-xl mt-4">✦ ✦ ✦</div>
      </header>

      {/* Section 1 - Mariage, Anniversaire & Karaoké */}
      <div className="mb-12 rounded-2xl overflow-hidden">
        <div className="relative min-h-[500px] flex items-center justify-center text-center">
          {/* Images en fond */}
          <div className="absolute inset-0">
            <img src={concert1} alt="Concert" className="absolute top-[10%] left-[5%] w-[22%] h-[180px] object-cover rounded-xl shadow-lg opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 z-10" />
            <img src={concert2} alt="Concert" className="absolute top-[40%] left-[2%] w-[20%] h-[160px] object-cover rounded-xl shadow-lg opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300" />
            <img src={concert3} alt="Karaoké" className="absolute bottom-[10%] left-[8%] w-[24%] h-[170px] object-cover rounded-xl shadow-lg opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300" />
            <img src={mariageImg} alt="Mariage" className="absolute top-[15%] right-[5%] w-[23%] h-[190px] object-cover rounded-xl shadow-lg opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300" />
            <img src={anniversaireImg} alt="Anniversaire" className="absolute bottom-[15%] right-[2%] w-[21%] h-[165px] object-cover rounded-xl shadow-lg opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300" />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 z-10"></div>
          
          {/* Contenu */}
          <div className="relative z-20 text-white px-6 py-12 max-w-[70%] mx-auto bg-black/40 backdrop-blur-sm rounded-2xl">
            <h2 className="text-2xl md:text-3xl text-[#ffd700] font-['Playfair_Display'] mb-2">🎤 Mariage, Anniversaire & Karaoké</h2>
            <p className="text-base mb-6 opacity-90">Des moments inoubliables pour vos événements</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm">
                <span>💍</span>
                <span>Mariages traditionnels & modernes</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm">
                <span>🎂</span>
                <span>Anniversaires enfants & adultes</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm">
                <span>🎤</span>
                <span>Soirées karaoké & concerts live</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm">
                <span>🎉</span>
                <span>Baptêmes, fiançailles, soirées privées</span>
              </div>
            </div>
            
            <div className="bg-[#ffd700] text-[#2c1810] inline-block px-6 py-2 rounded-full font-bold mb-6 text-sm">Sur devis personnalisé</div>
            
            <button className="bg-transparent border-2 border-[#ffd700] text-[#ffd700] px-6 py-3 rounded-full font-bold cursor-pointer transition-all duration-300 hover:bg-[#ffd700] hover:text-[#2c1810] hover:scale-105">
              Réserver un événement
            </button>
          </div>
        </div>
      </div>

      {/* Section 2 - Chambre et Salle côte à côte */}
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        
        {/* Chambre */}
        <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="relative h-[400px] overflow-hidden group">
            <img src={chambreImg} alt="Chambre" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent text-white p-6 transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/98 group-hover:via-black/85 group-hover:pb-7">
              <h3 className="text-xl md:text-2xl text-[#ffd700] font-['Playfair_Display'] mb-3">🛏️ Chambres & Hébergement</h3>
              <ul className="list-none mb-4 space-y-1">
                <li className="text-sm text-gray-200">✓ Chambres climatisées</li>
                <li className="text-sm text-gray-200">✓ Wi-Fi gratuit haut débit</li>
                <li className="text-sm text-gray-200">✓ Télévision écran plat</li>
                <li className="text-sm text-gray-200">✓ Service en chambre</li>
                <li className="text-sm text-gray-200">✓ Petit-déjeuner inclus</li>
              </ul>
              <div className="bg-[#ffd700] text-[#2c1810] inline-block px-4 py-1 rounded-full font-bold text-sm mb-3">À partir de 80 000 Ar/nuit</div>
              <button className="w-full bg-[#ffd700] text-[#2c1810] py-2 rounded-full font-bold cursor-pointer transition-all duration-300 hover:bg-white hover:scale-102">
                Réserver une chambre
              </button>
            </div>
          </div>
        </div>

        {/* Grande Salle */}
        <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="relative h-[400px] overflow-hidden group">
            <img src={salleImg} alt="Salle de réunion" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent text-white p-6 transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/98 group-hover:via-black/85 group-hover:pb-7">
              <h3 className="text-xl md:text-2xl text-[#ffd700] font-['Playfair_Display'] mb-3">🏢 Grande Salle pour Réunion</h3>
              <ul className="list-none mb-4 space-y-1">
                <li className="text-sm text-gray-200">✓ Capacité jusqu'à 100 personnes</li>
                <li className="text-sm text-gray-200">✓ Superficie : 120 m²</li>
                <li className="text-sm text-gray-200">✓ Vidéoprojecteur et écran</li>
                <li className="text-sm text-gray-200">✓ Climatisation</li>
                <li className="text-sm text-gray-200">✓ Espace parking</li>
              </ul>
              <div className="bg-[#ffd700] text-[#2c1810] inline-block px-4 py-1 rounded-full font-bold text-sm mb-3">Location: 150 000 Ar/jour</div>
              <button className="w-full bg-[#ffd700] text-[#2c1810] py-2 rounded-full font-bold cursor-pointer transition-all duration-300 hover:bg-white hover:scale-102">
                Louer la salle
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
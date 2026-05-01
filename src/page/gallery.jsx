import { useState, useEffect } from 'react';

// Import de toutes vos images
import image1 from '../assets/gallery/image1.jpeg';
import image2 from '../assets/gallery/image2.jpeg';
import image3 from '../assets/gallery/image3.jpeg';
import image4 from '../assets/gallery/image4.jpeg';
import image5 from '../assets/gallery/image5.jpeg';
import image6 from '../assets/gallery/image6.jpeg';
import image7 from '../assets/gallery/image7.jpeg';
import image8 from '../assets/gallery/image8.jpeg';
import image9 from '../assets/gallery/image9.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  // Gestion du scroll body avec useEffect
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup au démontage
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  // Liste des images
  const images = [
    { id: 1, url: image1, title: 'Plat Signature', category: 'plats', description: 'Notre spécialité du chef' },
    { id: 2, url: image2, title: 'Décoration Intérieure', category: 'ambiance', description: 'Ambiance chaleureuse et élégante' },
    { id: 3, url: image3, title: 'Entrée Fraîcheur', category: 'plats', description: 'Création de saison' },
    { id: 4, url: image4, title: 'Notre Terrasse', category: 'ambiance', description: 'Profitez de nos repas en extérieur' },
    { id: 5, url: image5, title: 'Dessert Gourmand', category: 'plats', description: 'Doux plaisirs sucrés' },
    { id: 6, url: image6, title: 'Cocktail Maison', category: 'boissons', description: 'Nos mixologistes à l\'œuvre' },
    { id: 7, url: image7, title: 'Salle Privée', category: 'ambiance', description: 'Pour vos événements privés' },
    { id: 8, url: image8, title: 'Notre Équipe', category: 'ambiance', description: 'Des professionnels à votre service' },
    { id: 9, url: image9, title: 'Carte des Vins', category: 'boissons', description: 'Sélection exceptionnelle de vins' },
  ];

  const categories = [
    { id: 'all', label: 'Tous', icon: '' },
    { id: 'plats', label: 'Plats', icon: '🍽️' },
    { id: 'ambiance', label: 'Ambiance', icon: '✨' },
    { id: 'boissons', label: 'Boissons', icon: '🍷' },
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-8 md:py-12 text-center font-['Poppins'] bg-[#f9f5f0]">
      {/* Header */}
      <header className="mb-8 md:mb-12">
        <h1 className="text-2xl md:text-4xl tracking-[5px] font-light mb-2 text-[#2c1810] font-['Playfair_Display']">
          NOTRE GALERIE
        </h1>
        <h2 className="text-[#d4af37] tracking-[3px] text-sm md:text-base font-light">
          Restaurant Ezaka
        </h2>
        <div className="text-[#d4af37] text-xl md:text-2xl my-4">✦ ✦ ✦</div>
        <p className="text-gray-500 text-sm md:text-base">
          Découvrez l'ambiance unique de notre établissement à travers nos photos
        </p>
      </header>

      {/* Filtres */}
      <div className="flex justify-center gap-2 md:gap-4 flex-wrap mb-8 md:mb-10">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-3 md:px-6 py-1.5 md:py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base
              ${filter === cat.id 
                ? 'bg-[#2c1810] text-[#ffd700] border-[#ffd700]' 
                : 'bg-white text-[#2c1810] border-2 border-[#2c1810] hover:bg-[#2c1810] hover:text-[#ffd700] hover:translate-y-[-2px]'
              }`}
          >
            {cat.icon && <span className="mr-1">{cat.icon}</span>}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grille d'images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-4">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            onClick={() => openModal(img)}
            className="relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-[4/3] group"
          >
            <img
              src={img.url}
              alt={img.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="block font-bold text-sm md:text-base">{img.title}</span>
              <span className="block text-xs opacity-90">{img.description}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Message aucun résultat */}
      {filteredImages.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p>Aucune image dans cette catégorie</p>
        </div>
      )}

      {/* Modale */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[2000] flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90%] max-h-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-[#ffd700] hover:scale-110 transition-transform"
            >
              ✕
            </button>
            <button
              onClick={prevImage}
              className="absolute left-[-40px] md:left-[-60px] top-1/2 -translate-y-1/2 bg-white/20 text-white text-2xl md:text-4xl px-2 md:px-4 py-1 md:py-2 rounded-full hover:bg-[#ffd700]/80 hover:text-[#2c1810] transition-all hidden md:block"
            >
              ‹
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] rounded-xl shadow-2xl"
            />
            <button
              onClick={nextImage}
              className="absolute right-[-40px] md:right-[-60px] top-1/2 -translate-y-1/2 bg-white/20 text-white text-2xl md:text-4xl px-2 md:px-4 py-1 md:py-2 rounded-full hover:bg-[#ffd700]/80 hover:text-[#2c1810] transition-all hidden md:block"
            >
              ›
            </button>
            <div className="absolute -bottom-12 left-0 right-0 text-center text-white bg-black/70 p-3 rounded-lg">
              <h3 className="text-[#ffd700] mb-1 font-bold">{selectedImage.title}</h3>
              <p className="text-sm">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
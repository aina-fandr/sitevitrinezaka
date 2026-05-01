import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Colonne 1 - Brand */}
        <div className="footer-col">
          <div className="footer-brand">
            <h3>Restaurant Ezaka</h3>
            <p className="description">
              Votre destination tout-en-un à Vangaindrano. Cuisine traditionnelle,
              bar, événements et bien plus — Restaurant Ezaka est fait pour vous.
            </p>
            <div className="separator">✦ ✦ ✦</div>
          </div>
        </div>

        {/* Colonne 2 - Navigation */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><button onClick={() => scrollToSection('accueil')}>Accueil</button></li>
            <li><button onClick={() => scrollToSection('apropos')}>À Propos</button></li>
            <li><button onClick={() => scrollToSection('services')}>Nos Services</button></li>
            <li><button onClick={() => scrollToSection('gallery')}>Galerie</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </div>

        {/* Colonne 3 - Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <div>
                <strong>Adresse</strong>
                <p>Ampasy Vangaindrano, Madagascar</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Téléphone</strong>
                <p>+261 34 90 770 20</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Email</strong>
                <p>ezaka.restaurant@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Colonne 4 - Horaires */}
        <div className="footer-col">
          <h4>Horaires</h4>
          <ul className="footer-hours">
            <li>
              <div>
                <strong>Restaurant</strong>
                <p>Mardi – Samedi : 11h00 – 21h00</p>
                <p>Dimanche : 12h00 – 20h00</p>
                <p className="closed">Lundi : Fermé</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Bar & Lounge</strong>
                <p>Mardi – Samedi : 15h00 – 23h00</p>
                <p>Dimanche : 15h00 – 22h00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bas du footer - Copyright */}
    </footer>
  );
};

export default Footer;
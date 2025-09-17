"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed w-full bg-gradient-to-b from-white to-gray-100 shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 text-sm bg-blue-600 text-white flex items-center leading-none justify-center font-bold rounded-full">
              LGX
            </div>
            <h1 className="text-2xl font-bold text-blue-600">LOGILIS</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-600">Acasă</a>
            <a href="#about" className="hover:text-blue-600">Despre noi</a>
            <a href="#services" className="hover:text-blue-600">Servicii</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden shadow-md px-6 pb-4 space-y-2">
            <a href="#home" className="block">Acasă</a>
            <a href="#about" className="block">Despre noi</a>
            <a href="#services" className="block">Servicii</a>
            <a href="#contact" className="block">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-400 to-indigo-800 text-white text-center px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-6"
        >
          Bine ai venit la LOGILIS
        </motion.h2>
        <p className="text-lg max-w-2xl mb-6">
          Partenerul tău de încredere în logistică și transport. Momentan predominăm pe zona Moldovei.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100"
        >
          Contactează-ne
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 mx-auto px-6 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300">
        <h3 className="text-3xl font-bold text-center mb-6">Despre noi</h3>
        <p className="text-center max-w-3xl mx-auto mb-4">
          La LOGILIS, oferim servicii de transport și logistică la cele mai înalte standarde.
          Cu o echipă dedicată și o flotă modernă, garantăm punctualitate și profesionalism.
          Ne concentrăm în special pe zona Moldovei, dar avem capacitatea de extindere națională.
        </p>
        <p className="text-center max-w-3xl mx-auto mb-4">
          Fondată în anul 2024, compania noastră a crescut rapid și a investit în tehnologii moderne pentru a asigura un transport sigur și eficient. Dispunem de vehicule diverse și de echipamente de monitorizare pentru a urmări fiecare livrare.
        </p>
        <p className="text-center max-w-3xl mx-auto">
          Suntem dedicați sustenabilității și eficienței operaționale. Încurajăm utilizarea de soluții eco-friendly și optimizăm rutele pentru reducerea consumului de combustibil.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Serviciile noastre</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-2xl text-center">
              <h4 className="text-xl font-semibold mb-2">Transport rutier</h4>
              <p>Livrare rapidă și sigură pentru clienții noștri.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-2xl text-center">
              <h4 className="text-xl font-semibold mb-2">Logistică integrată</h4>
              <p>Soluții personalizate pentru lanțul tău de aprovizionare.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-2xl text-center">
              <h4 className="text-xl font-semibold mb-2">Depozitare</h4>
              <p>Spații moderne de stocare pentru bunurile tale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="py-20 hidden max-w-6xl mx-auto px-6 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-12">Galerie & Media</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <img src="/media/truck1.jpg" alt="Flotă LOGILIS" className="w-full h-48 object-cover rounded-lg shadow" />
          <img src="/media/truck2.jpg" alt="Transport rutier" className="w-full h-48 object-cover rounded-lg shadow" />
          <img src="/media/warehouse.jpg" alt="Depozit LOGILIS" className="w-full h-48 object-cover rounded-lg shadow" />
        </div>
      </section>

      {/* Additional Information Section */}
      <section id="info" className="py-20 mx-auto px-6 bg-gradient-to-b from-gray-50 to-gray-400">
        <h3 className="text-3xl font-bold text-center mb-12">De ce să ne alegi pe noi?</h3>
        <div className="grid max-w-6xl mx-auto md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-2">Siguranță și încredere</h4>
            <p>Toate transporturile sunt monitorizate și asigurate pentru a garanta livrarea în siguranță.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Flotă modernă</h4>
            <p>Dispunem de vehicule diverse, adaptate pentru transport local și național.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Echipă profesionistă</h4>
            <p>Echipa noastră este specializată în logistică și oferă suport dedicat clienților.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Acoperire regională</h4>
            <p>Momentan predominăm în Moldova, dar suntem pregătiți să extindem serviciile la nivel național.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Tehnologie și monitorizare</h4>
            <p>Folosim sisteme moderne de tracking și software dedicat pentru o gestionare eficientă a comenzilor.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Sustenabilitate</h4>
            <p>Implementăm practici eco-friendly pentru a reduce amprenta de carbon a flotei noastre.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 mx-auto px-6 text-center bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300">
        <h3 className="text-3xl font-bold mb-6">Contactează-ne</h3>
        <p className="text-lg mb-4">
          Ne poți scrie la adresa de email:
        </p>
        <p className="text-blue-600 font-semibold"><span className="font-semibold">logilis [dot] srl [at] gmail [dot] com</span></p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        © {new Date().getFullYear()} LOGILIS. Toate drepturile rezervate.
      </footer>
    </div>
  );
}
      
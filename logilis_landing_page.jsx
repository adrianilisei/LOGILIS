import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center font-bold rounded-full">
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
          <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-2">
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
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-6"
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
      <section id="about" className="py-20 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-6">Despre noi</h3>
        <p className="text-center max-w-3xl mx-auto">
          La LOGILIS, oferim servicii de transport și logistică la cele mai înalte standarde.
          Cu o echipă dedicată și o flotă modernă, garantăm punctualitate și profesionalism.
          Ne concentrăm în special pe zona Moldovei, dar avem capacitatea de extindere națională.
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

      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-6">Contactează-ne</h3>
        <form className="max-w-2xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Nume"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
          <textarea
            placeholder="Mesaj"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Trimite
          </button>
        </form>
        <p className="text-center mt-6 text-gray-600">
          Ne poți scrie și la: <span className="font-semibold">logilis [dot] srl [at] gmail [dot] com</span>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        © {new Date().getFullYear()} LOGILIS. Toate drepturile rezervate.
      </footer>
    </div>
  );
}

import { Link } from "@remix-run/react";
import { ChevronRight, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <footer className="w-full bg-gray-800 py-8 md:py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Desktop View */}
        <div className="hidden md:flex flex-col lg:flex-row items-start justify-between">
          {/* Logo and Description Section */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold transition-all hover:scale-105 duration-300">
              Agri<span className="text-green-400">AI</span>
            </h2>
            <p className="mt-4 text-sm lg:text-base text-gray-400 max-w-md hover:text-white transition-colors duration-300">
              Solusi pertanian cerdas berbasis AI untuk masa depan pertanian Indonesia.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Fitur */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-bold mb-2">Fitur</h3>
              <Link to="/rekomendasi" className="text-gray-400 hover:text-green-400 hover:translate-x-2 transition-all duration-300">
                Rekomendasi Tanaman
              </Link>
              <Link to="/prediksi" className="text-gray-400 hover:text-green-400 hover:translate-x-2 transition-all duration-300">
                Prediksi Panen
              </Link>
              <Link to="/harga" className="text-gray-400 hover:text-green-400 hover:translate-x-2 transition-all duration-300">
                Tren Harga
              </Link>
              <Link to="/peringatan" className="text-gray-400 hover:text-green-400 hover:translate-x-2 transition-all duration-300">
                Sistem Peringatan
              </Link>
              <Link to="/forum" className="text-gray-400 hover:text-green-400 hover:translate-x-2 transition-all duration-300">
                Forum Edukasi
              </Link>
            </div>

            {/* Bantuan */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-bold mb-2">Bantuan</h3>
              <Link to="/faq" className="text-gray-400 hover:text-green-400 hover:translate-x-2 transition-all duration-300">
                FAQ
              </Link>
              <Link to="/kontak" className="text-gray-400 hover:text-green-400 hover:translate-x-2 transition-all duration-300">
                Kontak
              </Link>
              <Link to="/panduan" className="text-gray-400 hover:text-green-400 hover:translate-x-2 transition-all duration-300">
                Panduan Pengguna
              </Link>
              <Link to="/kebijakan-privasi" className="text-gray-400 hover:text-green-400 hover:translate-x-2 transition-all duration-300">
                Kebijakan Privasi
              </Link>
              <Link to="/syarat-ketentuan" className="text-gray-400 hover:text-green-400 hover:translate-x-2 transition-all duration-300">
                Syarat & Ketentuan
              </Link>
            </div>

            {/* Social and Contact */}
            <div className="flex flex-col space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" className="w-10 h-10 bg-gray-700 rounded-full hover:bg-green-600 cursor-pointer transition-all duration-300 flex items-center justify-center group">
                    <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href="https://instagram.com" className="w-10 h-10 bg-gray-700 rounded-full hover:bg-green-600 cursor-pointer transition-all duration-300 flex items-center justify-center group">
                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href="https://twitter.com" className="w-10 h-10 bg-gray-700 rounded-full hover:bg-green-600 cursor-pointer transition-all duration-300 flex items-center justify-center group">
                    <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 hover:text-white transition-colors duration-300">
                  Email: info@sahabattani.com
                </p>
                <p className="text-gray-400 hover:text-white transition-colors duration-300">
                  Telp: (021) 1234-5678
                </p>
                <p className="text-gray-400 hover:text-white transition-colors duration-300">
                  Alamat: Jl. SoekarnoHatta No. 123, Malang
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {/* Mobile Header */}
          <button
            className="flex w-full items-center justify-between group"
            onClick={handleClick}
          >
            <h2 className="text-2xl font-bold">
              Agri<span className="text-green-400">AI</span>
            </h2>
            <ChevronRight
              size={24}
              className={`transform transition-transform duration-300 group-hover:text-green-400 ${
                isActive ? "rotate-90" : ""
              }`}
            />
          </button>

          {/* Mobile Menu */}
          <div
            className={`space-y-6 transition-all duration-500 ${
              isActive ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            <p className="text-sm text-gray-400">
              Solusi pertanian cerdas berbasis AI untuk masa depan pertanian Indonesia.
            </p>

            {/* Mobile Navigation */}
            <div className="space-y-6">
              {/* Fitur Section */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold">Fitur</h3>
                <div className="flex flex-col space-y-2">
                  <Link to="/rekomendasi" className="text-gray-400 hover:text-green-400">
                    Rekomendasi Tanaman
                  </Link>
                  <Link to="/prediksi" className="text-gray-400 hover:text-green-400">
                    Prediksi Panen
                  </Link>
                  <Link to="/harga" className="text-gray-400 hover:text-green-400">
                    Tren Harga
                  </Link>
                  <Link to="/peringatan" className="text-gray-400 hover:text-green-400">
                    Sistem Peringatan
                  </Link>
                  <Link to="/forum" className="text-gray-400 hover:text-green-400">
                    Forum Edukasi
                  </Link>
                </div>
              </div>

              {/* Bantuan Section */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold">Bantuan</h3>
                <div className="flex flex-col space-y-2">
                  <Link to="/faq" className="text-gray-400 hover:text-green-400">
                    FAQ
                  </Link>
                  <Link to="/kontak" className="text-gray-400 hover:text-green-400">
                    Kontak
                  </Link>
                  <Link to="/panduan" className="text-gray-400 hover:text-green-400">
                    Panduan Pengguna
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Social */}
            <div>
              <h3 className="text-lg font-bold mb-3">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="w-10 h-10 bg-gray-700 rounded-full hover:bg-green-600 cursor-pointer transition-colors flex items-center justify-center">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" className="w-10 h-10 bg-gray-700 rounded-full hover:bg-green-600 cursor-pointer transition-colors flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" className="w-10 h-10 bg-gray-700 rounded-full hover:bg-green-600 cursor-pointer transition-colors flex items-center justify-center">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 SahabatTani. Seluruh hak cipta dilindungi.</p>
            <p className="text-center">Dikembangkan dengan <span className="text-red-500 animate-pulse">❤️</span> untuk petani Indonesia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
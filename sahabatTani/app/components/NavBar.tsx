import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [showAuthAlert, setShowAuthAlert] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { 
      name: "Feature", 
      path: "#",
      protected: true,
      subItems: [
        { name: "Rekomendasi Tanaman", path: "/rekomendasi" },
        { name: "Prediksi Panen", path: "/prediksi" },
        { name: "Tren Harga", path: "/harga" },
        { name: "Sistem Peringatan", path: "/peringatan" },
        { name: "Forum Edukasi", path: "/forum" }
      ]
    }
  ];

  const handleProtectedLink = (e: React.MouseEvent, isProtected: boolean) => {
    if (isProtected) {
      e.preventDefault();
      setShowAuthAlert(true);
      setTimeout(() => setShowAuthAlert(false), 3000);
    }
  };

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <li key={item.name} className="relative group">
          <a
            href={item.path}
            className="hover:text-amber-400 transition-colors duration-200 relative group flex items-center gap-1"
            onClick={(e) => handleProtectedLink(e, item.protected || false)}
          >
            {item.name}
            {item.subItems && (
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          {item.subItems && (
            <ul className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded-lg mt-2 py-2 w-48">
              {item.subItems.map((subItem) => (
                <li key={subItem.name}>
                  <a
                    href={subItem.path}
                    className="block px-4 py-2 hover:bg-green-50 hover:text-amber-600"
                    onClick={(e) => handleProtectedLink(e, item.protected || false)}
                  >
                    {subItem.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white text-black shadow-lg h-16"
            : "bg-amber-600 text-white h-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center space-x-3">
              <img
                src="/api/placeholder/40/40"
                alt="Logo"
                className={`transition-all duration-300 ${
                  isScrolled ? "h-8 w-8" : "h-10 w-10"
                } rounded-full hover:scale-110`}
              />
              <span className="text-xl font-bold">
                Sahabat<span className="text-amber-400">Tani</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="flex gap-8 font-semibold">
                <NavLinks />
              </ul>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="/login"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                Login
              </a>
              <a
                href="/register"
                className="bg-amber-500 text-white px-6 py-2 rounded-xl shadow-md hover:bg-amber-600 transition-all duration-200 hover:scale-105"
              >
                Daftar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Auth Alert */}
        {showAuthAlert && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-red-100 text-red-700 px-4 py-2 rounded-lg shadow-lg transition-all duration-300">
            Silakan login terlebih dahulu untuk mengakses fitur
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-16 w-64 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="py-4 text-black">
          <ul className="ml-4 flex flex-col gap-4 font-semibold">
            <NavLinks />
          </ul>
          <div className="mt-6 px-4 flex flex-col gap-4">
            <a
              href="/login"
              className="text-center hover:text-amber-400 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </a>
            <a
              href="/register"
              className="text-center bg-amber-500 text-white px-6 py-2 rounded-xl shadow-md hover:bg-amber-600 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Daftar
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
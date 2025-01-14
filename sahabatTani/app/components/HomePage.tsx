import { useState, useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { FaLeaf, FaChartLine, FaUsers } from "react-icons/fa";

export const meta: MetaFunction = () => {
  return [
    { title: "SahabatTani - Solusi Pertanian Cerdas" },
    { description: "Platform pertanian berbasis AI untuk hasil panen yang lebih baik" },
  ];
};

const heroContent = [
  {
    id: 1,
    title: "Membangun Masa Depan Pertanian",
    subtitle: "Inovasi Berkelanjutan untuk Indonesia",
    image: "index1.jpg",
  },
  {
    id: 2,
    title: "Dari Alam, Untuk Kehidupan",
    subtitle: "Melestarikan Tradisi, Merangkul Teknologi",
    image: "index2.jpg",
  },
  {
    id: 3,
    title: "Bersama Menuju Kemandirian",
    subtitle: "Pertanian Modern yang Ramah Lingkungan",
    image: "index3.jpg",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Animation */}
        <section className="relative h-screen">
          {heroContent.map((content, index) => (
            <div
              key={content.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-black opacity-50" />
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                  <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 transform transition-all duration-700 translate-y-0">
                      {content.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                      {content.subtitle}
                    </p>
                    <button className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 transition transform hover:scale-105">
                      Mulai Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Discover Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/discover/smart-farming.jpg"
                    alt="Smart Farming"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-8">
                    <div className="text-white">
                      <h2 className="text-3xl font-bold mb-4">Pertanian Pintar</h2>
                      <p className="text-lg mb-6">Optimalkan hasil panen dengan teknologi AI</p>
                      <button className="bg-white text-amber-600 px-6 py-2 rounded-full hover:bg-green-50 transition">
                        Pelajari Lebih Lanjut
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className={`transition-all duration-700 delay-200 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                }`}>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src="/discover/community.jpg"
                      alt="Farming Community"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="text-2xl font-bold mb-2">Komunitas Terpercaya</h3>
                        <p>Bergabung dengan 1000+ petani sukses</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`transition-all duration-700 delay-400 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                }`}>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src="/discover/sustainable.jpg"
                      alt="Sustainable Farming"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="text-2xl font-bold mb-2">Pertanian Berkelanjutan</h3>
                        <p>Untuk masa depan yang lebih baik</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with Scroll Animation */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Fitur Utama</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaLeaf className="text-amber-500 text-4xl" />,
                  title: "Rekomendasi Tanaman",
                  description: "AI-powered untuk kondisi lahan optimal"
                },
                {
                  icon: <FaChartLine className="text-amber-500 text-4xl" />,
                  title: "Analisis Prediktif",
                  description: "Prediksi hasil panen dengan akurat"
                },
                {
                  icon: <FaUsers className="text-amber-500 text-4xl" />,
                  title: "Komunitas Aktif",
                  description: "Berbagi pengalaman dan pengetahuan"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-lg shadow-lg transform transition-all duration-700 hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
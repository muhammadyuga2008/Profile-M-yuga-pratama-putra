"use client";

import { HeroScrollDemo } from "@/components/ui/portfolio-hero";
import Image from "next/image";

export default function Home() {
  // DATA UNTUK LEARNING EXPERIENCE (Tetap sesuai kodingan Yuga)
  const learningApps = [
    {
      name: "HTML CSS & JavaScript",
      status: "Menengah",
      desc: "Membuat struktur web dasar dan mengatur layout visual website.",
      logo: "/image/hcj.jpg",
    },
    {
      name: "Laravel",
      status: "Menengah",
      desc: "Styling website dengan cepat menggunakan utility-first classes.",
      logo: "/image/laravel.jpeg",
    },
    {
      name: "Figma",
      status: "Mahir",
      desc: "Membuat desain aplikasi maupun web dengan prototype nya.",
      logo: "/image/figma.jpg",
    },
    {
      name: "Blender",
      status: "Sedang Dipelajari",
      desc: "Membuat animasi sederhana.",
      logo: "/image/blender.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      
      {/* 1. BAGIAN: ANIMASI HERO SCROLL */}
      <HeroScrollDemo />
      
      {/* 2. BAGIAN: TENTANG SAYA (ABOUT ME) */}
      <section className="bg-zinc-900 py-24 px-6 md:px-12 flex flex-col items-center border-t border-zinc-800">
        <div className="max-w-3xl w-full space-y-6">
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Tentang Saya
          </h2>
          
          <div className="h-1 w-20 bg-purple-500 rounded"></div>
          
          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light">
            Halo! Nama saya <span className="text-white font-semibold">M.yuga pratama putra</span>. 
            Siswa jurusan Rekayasa Perangkat Lunak dari SMKN 2 SUKABUMI dengan ketertarikan mendalam pada 
            dunia pemrograman. Saya memiliki komitmen tinggi untuk terus mengasah teknis, adaptif terhadap 
            teknologi baru, dan siap memberikan kontribusi terbaik dalam setiap pengembangan perangkat lunak.
          </p>
          
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            Saat ini saya sedang mendalami teknologi web modern seperti Next.js, React, dan Tailwind CSS 
            untuk membangun proyek-proyek kreatif. Saya percaya bahwa baris kode tidak hanya harus bekerja dengan baik, 
            tetapi juga harus mampu menyampaikan cerita dan kenyamanan visual bagi siapa saja yang melihatnya.
          </p>
          
          <div className="pt-4">
            <a 
              href="https://www.instagram.com/yuga00_?igsh=bXBsY3NwanM3ZW4y" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-xl transition duration-300 shadow-lg shadow-purple-500/20"
            >
              Mari Berkolaborasi
            </a>
          </div>

        </div>
      </section>

      {/* 3. BAGIAN: LEARNING EXPERIENCE */}
      <section className="bg-zinc-950 py-24 px-6 md:px-12 flex flex-col items-center border-t border-zinc-900">
        <div className="max-w-5xl w-full space-y-12">
          
          {/* Judul Seksi */}
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Learning Experience
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              Aplikasi, tools, dan teknologi yang sudah dan sedang saya pelajari selama di RPL.
            </p>
          </div>

          {/* Grid Layout Kotak Aplikasi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningApps.map((app, index) => (
              <div 
                key={index} 
                className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 flex flex-col items-center text-center hover:border-zinc-700 transition duration-300 group"
              >
                {/* Wadah Foto/Logo Aplikasi */}
                <div className="w-16 h-16 relative mb-4 bg-zinc-800/40 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition duration-300">
                  <Image
                    src={app.logo}
                    alt={app.name}
                    width={64}
                    height={64}
                    className="object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Teks penanda/cadangan kalau gambarnya belum kamu download */}
                  <span className="absolute text-[10px] text-zinc-600 font-mono select-none -z-10">LOGO</span>
                </div>

             
                <h3 className="font-semibold text-lg text-zinc-100 group-hover:text-cyan-400 transition duration-300">
                  {app.name}
                </h3>

               
                <span className="mt-1.5 px-2.5 py-0.5 text-xs font-medium rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                  {app.status}
                </span>

              
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

     
      <section className="bg-zinc-900 py-24 px-6 md:px-12 flex flex-col items-center border-t border-zinc-800">
        <div className="max-w-5xl w-full space-y-12">
        
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
              Hobi & Minat
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              Aktivitas dan hal yang saya gemari di luar jam produktif coding.
            </p>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
          
            <div className="bg-zinc-950/50 border border-zinc-800/80 rounded-2xl p-8 flex flex-col justify-between space-y-6 hover:border-orange-500/40 transition duration-300 group">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M6.2 6.2c2.4 2.4 2.4 6.4 0 8.8"/>
                      <path d="M17.8 6.2c-2.4 2.4-2.4 6.4 0 8.8"/>
                      <path d="M2 12h20"/>
                      <path d="M12 2v20"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-orange-400 transition duration-300">
                      Bermain Bola Basket
                    </h3>
                    <p className="text-orange-500/80 text-xs font-medium tracking-wide uppercase">Olahraga & Tim</p>
                  </div>
                </div>

                <p className="text-zinc-400 text-base leading-relaxed">
                  Selain fokus di dunia IT dan rekayasa perangkat lunak, bermain bola basket adalah hobi terbesar saya. 
                  Olahraga ini mengajarkan saya arti penting dari komunikasi, kerja sama tim yang solid, serta disiplin tinggi—nilai-nilai positif yang selalu saya terapkan juga saat berkolaborasi membangun sebuah software.
                </p>
              </div>

             
              <div className="pt-2">
                <a 
                  href="https://www.instagram.com/thetwosbasketball__?igsh=MWY4OGxjeHF2NmFrZA==" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium px-5 py-3 rounded-xl transition duration-300 shadow-lg shadow-orange-500/10 group/btn"
                >
                  <span>Kunjungi IG Basket Saya</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transform group-hover/btn:translate-x-1 transition duration-200">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Kotak Kutipan (Quote) Biar Layout Seimbang Kanan-Kiri */}
            <div className="bg-zinc-900/30 border border-dashed border-zinc-800 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
              <span className="text-4xl mb-2 select-none text-zinc-700 font-serif">“</span>
              <p className="text-zinc-400 text-base italic max-w-xs leading-relaxed">
                "Keseimbangan antara melatih logika di depan layar komputer dan mengasah fisik di lapangan basket adalah kunci semangat saya."
              </p>
            </div>

          </div>

        </div>
        
      </section>

    </main>
  );
}
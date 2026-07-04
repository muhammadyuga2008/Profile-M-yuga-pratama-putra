"use client";

import { HeroScrollDemo } from "@/components/ui/portfolio-hero";
import Image from "next/image";

export default function Home() {
  // DATA KEAHLIAN TEKNIS (Sesuai CV ATS)
  const skills = [
    { name: "Front-End", tech: "Html, CSS, JavaScript, React.js", desc: "Membangun antarmuka web yang dinamis, responsif, dan interaktif.", image: "/image/hcj.jpg" },
    { name: "Design", tech: "Figma, Prototyping,Blender", desc: "Merancang antarmuka UI/UX yang intuitif serta pemodelan aset 3D untuk visual kreatif yang estetik dan imersif.", image: "/image/desain.jpg" },
    { name: "Back-End", tech: "Laravel, MySQL", desc: "Memahami arsitektur server-side, integrasi API, dan manajemen database.", image: "/image/laravel.jpeg" },
    { name: "Tools & IoT", tech: "GitHub, Postman, Wokwi", desc: "Kolaborasi kode, pengujian API, dan simulasi sistem cerdas (IoT).", image: "/image/iot.png" },
  ];

  // DATA PROYEK
  const projects = [
    { 
      title: "Store APP", 
      desc: "Aplikasi web toko online yang dibangun untuk melatih kemampuan manajemen database, fitur keranjang belanja, dan proses checkout. Proyek ini mengasah kemandirian dalam memecahkan masalah (debugging) dan pemahaman sistem e-commerce.", 
      images: ["/image/foto1 (5).png", "/image/foto1 (3).png"] 
    },
    { 
      title: "Pendaftaran Mahasiswa Baru", 
      desc: "Aplikasi web untuk sistem pendaftaran mahasiswa baru. Proyek ini melatih ketelitian dalam validasi form input agar data tersimpan dengan rapi di database. Saya juga berfokus pada perancangan antarmuka yang ramah pengguna (user-friendly) untuk memudahkan pendaftar dalam proses pengisian data.", 
      images: ["/image/foto1 (4).png", "/image/foto1 (1).png"] 
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-purple-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <HeroScrollDemo />
      
      {/* 2. PROFIL & FOTO */}
      <section className="bg-zinc-900 py-24 px-6 md:px-12 flex flex-col items-center border-t border-zinc-800">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border-4 border-zinc-800 shadow-2xl">
            <Image 
              src="/image/yuga.jpeg" 
              alt="M. Yuga Pratama Putra"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Profil
            </h2>
            <p className="text-xl leading-relaxed text-zinc-300">
              Saya adalah seorang <strong>Front-End Developer</strong> dengan minat mendalam pada <strong>UI/UX Design</strong>. 
              Berpengalaman mengubah konsep visual menjadi aplikasi web yang estetis, intuitif, dan responsif.
            </p>
            <p className="text-zinc-400">
              Saat ini, saya sedang mendalami React.js (Vite) untuk membangun antarmuka dinamis. Keahlian saya didukung oleh pemahaman arsitektur backend Laravel, integrasi API, serta kolaborasi tim yang efisien menggunakan Git.
            </p>
            
            <a 
              href="https://www.instagram.com/yuga00_?igsh=bXBsY3NwanM3ZW4y" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full transition duration-300 shadow-lg shadow-purple-500/20"
            >
              Berkolaborasi
            </a>
          </div>
        </div>
      </section>

      {/* 3. KEAHLIAN & TEKNOLOGI */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Learning Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-purple-500/50 transition-all">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-700 relative">
                <Image src={skill.image} alt={skill.name} fill className="object-cover" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100 mb-2">{skill.name}</h3>
              <p className="text-xs font-mono text-purple-400 mb-3">{skill.tech}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROYEK TERBARU */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto bg-zinc-900/30 rounded-3xl border border-zinc-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Project Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-purple-500 transition-all">
              <div className="grid grid-cols-2 gap-3 mb-6">
                {proj.images.map((img, idx) => (
                  <div key={idx} className="relative h-32 w-full rounded-2xl overflow-hidden border border-zinc-700">
                    <Image src={img} alt={`${proj.title} image ${idx}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-zinc-400 text-sm mb-4">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. MINAT & FOKUS */}
      <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center text-zinc-400">Bidang Minat & Fokus</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Web Development", "UI/UX Design", "Produksi Media", "Team Leadership", "Software Architecture"].map((minat) => (
            <div key={minat} className="px-6 py-3 border border-zinc-800 rounded-full bg-zinc-900 hover:border-purple-500 transition-colors">
              <span className="text-zinc-200">{minat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. KEPEMIMPINAN */}
      <section className="bg-zinc-900 py-24 px-6 md:px-12 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold">Organisasi</h2>
          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="text-2xl font-bold">Wakil Ketua Basketball - SMKN 2 Sukabumi</h3>
            <p className="text-orange-400 font-medium mb-4">Oktober 2025 - Present</p>
            <ul className="space-y-3 text-zinc-300 list-disc pl-4 mb-8">
              <li>Membantu manajemen organisasi serta mengoordinasikan tim publikasi dan dokumentasi.</li>
              <li>Memimpin koordinasi harian serta memonitor kedisiplinan dan kehadiran anggota tim.</li>
            </ul>
            <a 
              href="https://www.instagram.com/thetwosbasketball__?igsh=MWY4OGxjeHF2NmFrZA==" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-full transition duration-300 shadow-lg shadow-orange-500/20"
            >
              TheTwosbasketball
            </a>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-12 text-center border-t border-zinc-800 text-zinc-500">
        <p>© 2026 M. Yuga Pratama Putra. All rights reserved.</p>
        <p className="text-sm mt-2">muhammadyuga2008@gmail.com | +62 857-9883-9281</p>
      </footer>
    </main>
  );
}
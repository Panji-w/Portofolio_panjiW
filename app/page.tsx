'use client';

import { useState } from 'react';
import { projectsData, Project } from '@/data/projects';
import { Mail, Gamepad2, ArrowUpRight, X } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'website' | 'game'>('all');

  // State untuk melacak sertifikat mana yang sedang dibuka di Pop-up
  const [selectedCert, setSelectedCert] = useState<{ nama: string; gambar: string } | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const pendidikanData = [
  {
    institusi: 'SMK Informatika Pesat',
    jurusan: 'Rekayasa Perangkat Lunak (RPL)',
    periode: '2023 — 2026',
  }
];

const sertifikasiData = [
  {
    nama: 'Junior Web Developer — BNSP',
    penerbit: 'Badan Nasional Sertifikasi Profesi',
    tahun: '2025',
    gambar: '/', // Ganti dengan foto sertifikat Anda
  },
  {
    nama: 'TOEIC - English Listening & Reading',
    penerbit: 'TOEIC Official',
    tahun: '2025',
    gambar: '/WhatsApp Image 2026-05-21 at 11.38.00 AM.jpeg', // Ganti dengan foto sertifikat Anda
  }
];

  return (
    <div className="bg-canvas text-ink font-sans min-h-screen selection:bg-sky-light">
      
      {/* Navigasi Atas */}
      <nav className="h-[64px] border-b border-hairline bg-canvas sticky top-0 z-50 px-6 lg:px-12 flex items-center justify-between">
        <div className="font-mono text-sm font-semibold tracking-tight">
          PANJI<span className="text-body font-normal">@2026</span>
        </div>
        <div className="flex items-center gap-6 lg:gap-8">
          <a href="#about" className="text-sm font-medium text-body hover:text-ink transition-colors">Tentang</a>
          <a href="#projects" className="text-sm font-medium text-body hover:text-ink transition-colors">Proyek</a>
          <a href="#contact" className="text-sm font-medium text-body hover:text-ink transition-colors">Kontak</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-canvas border-b border-hairline py-20 lg:py-28 px-6 lg:px-12">
        {/* Soft Sky Gradient Backdrop - Sesuai Design System */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-light/40 to-sky-mid/20 pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <span className="inline-block bg-surface-strong text-ink font-mono text-[11px] font-semibold tracking-[0.88px] uppercase px-2.5 py-1 rounded-pill mb-6">
          </span>
          <h1 className="text-4xl lg:text-6xl font-semibold tracking-mega leading-[1.05] max-w-[850px] mb-6">
            Siap membangun serta menyajikan platform web yang akan memberikan pengalaman digital yang imersif.
          </h1>
          <p className="text-base lg:text-lg text-body font-normal leading-relaxed max-w-[600px] mb-8">
            Saya seorang <em>Full-Stack Developer</em> dan <em>Game Developer</em> yang berfokus pada optimalisasi performa kode serta penyajian interface yang efektif dan efisien serta tepat guna.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="#projects" 
              className="h-10 bg-primary hover:bg-primary-active text-white text-sm font-medium px-[18px] rounded-md inline-flex items-center justify-center transition-colors"
            >
              Lihat Karya
            </a>
            <a 
              href="#contact"   
              className="text-sm font-medium text-text-link hover:underline inline-flex items-center"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </header>

      {/* Bagian 1: Tentang Saya (About Me dengan Pendidikan & Sertifikasi) */}
      <section id="about" className="py-20 px-6 lg:px-12 max-w-[1200px] mx-auto border-b border-hairline">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Kolom Kiri: Komponen Foto Profil */}
          <div className="flex justify-center md:justify-start sticky top-24">
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-lg overflow-hidden bg-surface-strong border border-hairline-strong shadow-sm group">
              <img 
                src="/WhatsApp Image 2026-05-21 at 11.32.51 AM.jpeg" 
                alt="Foto Profil Panji" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Kolom Kanan: Deskripsi, Pendidikan & Sertifikasi */}
          <div className="md:col-span-2 space-y-10">
            
            {/* Sub-bagian: Narasi Profil */}
            <div>
              <span className="font-mono text-[11px] font-semibold tracking-[0.88px] text-body uppercase block mb-2">
                Kenal Lebih Dekat
              </span>
              <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-ink mb-4">
                Tentang Saya
              </h2>
              <p className="text-body text-sm lg:text-base leading-relaxed mb-6">
                Saya mendedikasikan diri untuk merancang kode yang bersih dan terstruktur demi memecahkan masalah performa di sisi server maupun keringanan beban di sisi klien. Pendekatan desain saya selalu berlandaskan prinsip kegunaan fungsional, tanpa dekorasi berlebihan yang mengganggu kenyamanan pengguna (*user experience*).
              </p>
              <div className="border-t border-hairline pt-4">
                <p className="text-xs font-mono text-body uppercase tracking-wider mb-2">Tech Stack Utama:</p>
                <p className="text-sm font-semibold text-ink">
                  Next.js · TypeScript · Tailwind CSS · Prisma · Godot Engine · Blender
                </p>
              </div>
            </div>

            {/* Sub-bagian: Riwayat Pendidikan */}
            <div className="border-t border-hairline pt-8">
              <h3 className="text-xs font-mono text-body uppercase tracking-wider mb-4">
                Riwayat Pendidikan
              </h3>
              <div className="space-y-4">
                {pendidikanData.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <div>
                      <h4 className="text-sm font-semibold text-ink">{edu.institusi}</h4>
                      <p className="text-xs text-body">{edu.jurusan}</p>
                    </div>
                    <span className="font-mono text-xs text-body sm:text-right">{edu.periode}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-bagian: Sertifikasi Interaktif */}
            <div className="border-t border-hairline pt-8">
              <h3 className="text-xs font-mono text-body uppercase tracking-wider mb-4">
                Sertifikasi (Klik untuk melihat)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sertifikasiData.map((cert, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCert({ nama: cert.nama, gambar: cert.gambar })}
                    className="flex flex-col items-start p-4 bg-canvas border border-hairline hover:border-hairline-strong rounded-md text-left transition-all group relative"
                  >
                    <div className="flex items-start justify-between w-full gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-ink group-hover:text-text-link transition-colors leading-tight">
                        {cert.nama}
                      </h4>
                      <ArrowUpRight size={14} className="text-body/40 group-hover:text-text-link shrink-0 transition-colors" />
                    </div>
                    <div className="flex justify-between w-full text-[11px] font-mono text-body mt-auto pt-2">
                      <span>{cert.penerbit}</span>
                      <span>{cert.tahun}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bagian 2: Proyek Terpilih (Tata Letak Vertikal dengan Kontrol Visibilitas Tombol) */}
      <section id="projects" className="py-20 px-6 lg:px-12 max-w-[1200px] mx-auto border-b border-hairline">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-[11px] font-semibold tracking-[0.88px] text-body uppercase block mb-2">
              Etalase Karya
            </span>
            <h2 className="text-3xl font-semibold tracking-lg leading-[1.15]">
              Eksplorasi Proyek
            </h2>
          </div>

          {/* Filter UX */}
          <div className="flex p-1 bg-surface-strong rounded-md self-start sm:self-auto">
            {(['all', 'website', 'game'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-1.5 text-sm font-medium capitalize transition-all rounded-sm ${
                  filter === type
                    ? 'bg-canvas text-ink shadow-sm'
                    : 'text-body hover:text-ink'
                }`}
              >
                {type === 'all' ? 'Semua' : type}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid - Responsif 2 Kolom pada Layar Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            
            // Fungsi penentu teks dan gaya warna badge status (Ukuran Teks Diperbesar)
            const getStatusDetails = (status: typeof project.status) => {
              switch (status) {
                case 'live':
                  return { label: 'Live', style: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
                case 'source_code':
                  return { label: 'Siap Diluncurkan', style: 'bg-blue-50 text-blue-700 border-blue-200' };
                case 'on progress':
                  return { label: 'Masih Progress', style: 'bg-amber-50 text-amber-700 border-amber-200' };
                case 'konsep':
                  return { label: 'Inovasi', style: 'bg-purple-50 text-purple-700 border-purple-200' };
                default:
                  return { label: status, style: 'bg-surface-strong text-body border-hairline' };
              }
            };

            const statusInfo = getStatusDetails(project.status);

            // Kondisi tombol: Hanya dirender jika ada link aktif dan bukan '#' kosong
            const hasValidLink = project.link && project.link !== '#';

            return (
              <article 
                key={project.id}
                className="bg-surface-card border border-hairline-strong rounded-lg overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all flex flex-col group"
              >
                {/* 1. GAMBAR DI ATAS: Lebih besar, jelas, dan selaras penuh dengan lebar card */}
                <div className="w-full h-[200px] sm:h-[220px] overflow-hidden bg-surface-strong border-b border-hairline relative shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* 2. KONTEN DETAIL: Diletakkan di bawah gambar */}
                <div className="p-5 lg:p-6 flex flex-col flex-1 justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-[10px] font-semibold tracking-[0.88px] text-body uppercase">
                        {project.category}
                      </span>
                      
                      {/* Badge Status: Diperbesar ukuran font dan disesuaikan padding-nya */}
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-sm border uppercase tracking-wide ${statusInfo.style}`}>
                        {statusInfo.label}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold tracking-tight text-ink group-hover:text-text-link transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-body leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4 mt-auto">
                    {/* Kumpulan Tagging Komponen */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="font-mono text-[11px] text-ink bg-canvas-soft border border-hairline px-2 py-0.5 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 3. BUTTON DETAIL: Kondisional (Hanya muncul jika hasValidLink bernilai TRUE) */}
                    {hasValidLink && (
                      <div className="pt-2 border-t border-hairline-soft">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-9 bg-primary hover:bg-primary-active text-white text-xs font-medium rounded-md inline-flex items-center justify-center gap-1 transition-colors shadow-sm"
                        >
                          Lihat Detail Proyek <span className="text-[14px]">→</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bagian 3: Kontak */}
      <section id="contact" className="bg-canvas-soft py-20 px-6 lg:px-12 border-t border-hairline">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Kolom Kiri: Ajakan Bertindak (CTA) */}
          <div>
            <span className="font-mono text-[11px] font-semibold tracking-[0.88px] text-body uppercase block mb-2">
              Hubungi Saya
            </span>
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Mari kita wujudkan</h2>
            <p className="text-body text-sm leading-relaxed max-w-[450px]">
              Sering kali hal-hal besar tercipta dari sebuah hal-hal kecil dan juga tujuan tercipta jika kita memulai dan menguatkan tekat untuk mewujudkannya. memiliki ide tentang proyek web yang menarik, ingin berkolaborasi mewujudkan sebuah game menarik, jangan hanya menjadi sebuah angan atau mimpi. Mari kita bicarakan, kita diskusikan, dan kita wujudkan.
            </p>
          </div>
          
          {/* Kolom Kanan: Detail Kontak & Sosial Media Bertanda Logo */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <div className="w-full md:max-w-sm space-y-8">
              
              {/* Jalur Kontak Utama: Email */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 text-ink flex items-center gap-2">
                  <Mail size={14} className="text-body" /> Kirim Surel
                </h3>
                <a 
                  href="mailto:waskitopanji5@gmail.com"
                  className="text-lg font-medium text-text-link hover:underline inline-flex items-center gap-1 group break-all"
                >
                  waskitopanji5@gmail.com
                  <ArrowUpRight size={16} className="text-text-link/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
              
              {/* Jalur Kontak Pendukung: Sosial Media & Platform */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-ink">
                  Jaringan & Platform
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  
                  {/* GitHub - Menggunakan Inline SVG Mandiri */}
                  <a 
                    href="https://github.com/Panji-w" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-canvas border border-hairline hover:border-hairline-strong rounded-md text-body hover:text-ink transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 fill-current text-ink" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span>GitHub</span>
                    </div>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* WhatsApp - Menggunakan Ikon Lucide untuk Konsistensi Desain */}
                  <a 
                    href="https://wa.me/6282125772381" // Ganti dengan nomor WhatsApp Anda (gunakan format kode negara tanpa tanda +)
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-canvas border border-hairline hover:border-hairline-strong rounded-md text-body hover:text-ink transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      {/* Menggunakan ikon MessageSquare dari lucide-react dengan warna khas hijau WhatsApp yang lembut */}
                      <span className="text-[#25D366]">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4.011 11.966.011c3.184.001 6.177 1.242 8.426 3.496 2.248 2.253 3.487 5.244 3.484 8.428-.004 6.616-5.34 11.953-11.907 11.953-2.001-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.657.983 3.31 1.493 5.315 1.495 5.438 0 9.86-4.414 9.863-9.855.002-2.636-1.023-5.115-2.887-6.982-1.864-1.866-4.346-2.891-6.984-2.893-5.44 0-9.866 4.417-9.869 9.858-.001 2.03.528 4.017 1.532 5.767L2.402 21.5l4.245-1.114zm10.457-7.142c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        </svg>
                      </span>
                      <span>WhatsApp</span>
                    </div>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* LinkedIn - Menggunakan Inline SVG Mandiri */}
                  {/* <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-canvas border border-hairline hover:border-hairline-strong rounded-md text-body hover:text-ink transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 fill-current text-[#0a66c2]" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                      <span>LinkedIn</span>
                    </div>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a> */}

                  {/* Platform Game (Itch.io) */}
                  {/* <a 
                    href="https://itch.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-canvas border border-hairline hover:border-hairline-strong rounded-md text-body hover:text-ink transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Gamepad2 size={16} className="text-[#ff4b4b]" />
                      <span>Itch.io (Gamedev)</span>
                    </div>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a> */}

                </div>
              </div>

            </div>

            {/* Hak Cipta */}
            <p className="text-[11px] font-mono text-body mt-16 md:mt-12">
              © 2026 Panji Portofolio. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </section>

      {selectedCert && (
        <div 
          className="fixed inset-0 bg-primary/40 backdrop-blur-sm z- flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setSelectedCert(null)} // Klik di luar gambar untuk menutup pop-up
        >
          <div 
            className="bg-canvas border border-hairline-strong rounded-lg max-w-2xl w-full p-4 lg:p-6 shadow-xl relative scale-[0.98] animate-[scaleIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()} // Mencegah penutupan jika area gambar di dalam kotak diklik
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-hairline">
              <h3 className="text-sm font-semibold text-ink font-sans tracking-tight">
                {selectedCert.nama}
              </h3>
              <button 
                onClick={() => setSelectedCert(null)}
                className="w-8 h-8 rounded-sm bg-surface-strong hover:bg-hairline-strong flex items-center justify-center text-ink transition-colors"
                aria-label="Tutup pop-up"
              >
                <X size={16} />
              </button>
            </div>

            {/* Kontainer Gambar Sertifikat */}
            <div className="bg-canvas-soft rounded-sm overflow-hidden border border-hairline max-h-[70vh] flex items-center justify-center">
              <img 
                src={selectedCert.gambar} 
                alt={`Sertifikat ${selectedCert.nama}`}
                className="w-full h-auto object-contain max-h-[60vh]"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
export interface Project {
  id: string;
  title: string;
  category: 'website' | 'game';
  description: string;
  tags: string[];
  link: string;
  image?: string;
  status: 'live' | 'source_code' | 'on progress' | 'konsep'; // Tambahkan properti status
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Sistem Absensi QR',
    category: 'website',
    description: 'sistem aplikasi berbasis web yang dapat mempermudah absensi dengan menggunakan metode QR yang memudahkan proses pencatatan kehadiran dan manajemen data absensi. Dibangun dengan Next.js dan TypeScript untuk frontend yang responsif, serta MySQL sebagai basis data utama.',
    tags: ['Next.js', 'Prisma', 'MySQL', 'NextAuth'],
    link: 'https://absensi-qr-three.vercel.app/',
    image: '/absensiqr (1).png',
    status: 'live',
  },
  {
    id: '2',
    title: 'Website kalender event',
    category: 'website',
    description: 'sistem aplikasi web untuk menampilkan kalender event yang memudahkan pengguna dalam melihat jadwal acara dan kegiatan. Dibangun dengan Next.js dan TypeScript untuk frontend yang responsif, serta MySQL sebagai basis data utama.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/Panji-w/kalendarEvent',
    image: '/diskominfo.png',
    status: 'on progress',
  },
  {
    id: '3',
    title: 'Pendaftaran Mahasiswa Baru',
    category: 'website',
    description: 'sistem aplikasi berbasis web untuk menciptakan sebuah proses pendaftaran mahasiswa baru yang efektif, efisien dan mudah diaplikasikan, selain daripada data yang tersusun rapih serta mudah diakses, aplikasi ini akan sangat bermanfaat digunakan dikalangan lembaga pendidikan yang jumlah pendaftarnya cukup banyak. Dibangun dengan Laravel dan Filament untuk backend yang kuat, serta MySQL sebagai basis data utama.',
    tags: ['Laravel', 'Filament', 'Tailwind CSS', 'MySQL'],
    link: 'https://github.com/Panji-w/RegistrasiMahasiswaBaru',
    image: '/BNSP_dashboard.png',
    status: 'source_code',
  },
  {
    id: '4',
    title: 'Game berkendara',
    category: 'game',
    description: 'Sebuah game yang memungkinkan pemain menjelajahi lingkungan perkotaan menggunakan mobil. dalam game ini pemain dapat berkeliling kota dan menikmati pengalaman berkendara. banyak manfaat yang dapat dirasakan dengan bermain game ini, seperti meningkatkan keterampilan koordinasi tangan-mata, memperkuat kemampuan pemecahan masalah, dan memberikan hiburan yang menyenangkan. Game ini dikembangkan menggunakan Unity dan C# untuk menciptakan pengalaman berkendara yang realistis dan menarik.',
    tags: ['Unity', 'C#'],
    link: '#',
    image: '/cargame.png',
    status: 'on progress',
  },
  {
    id: '5',
    title: 'Tappy plane',
    category: 'game',
    description: 'Game arcade kasual dengan mekanik ketuk-untuk-terbang adaptasi dari Flappy Bird klasik. Dikembangkan dengan animasi fisika pesawat yang mulus, sistem penghitung skor tinggi lokal, dan rintangan dinamis. Game ini dapat meningkatkan sensor motorik, melatih koordinasi tangan-mata, dan memberikan hiburan cepat yang adiktif.',
    tags: ['GDevelop'],
    link: '#',
    image: '/Screenshot 2026-05-19 215140.png',
    status: 'live',
  },
  {
    id: '6',
    title: 'Artifact Inventarium — Dev Portfolio Catalyst',
    category: 'website',
    description: 'Aplikasi web manajemen aset desain 3D dan repositori kode untuk developer game. yang berfungsi untuk menyimpan dan mengelola aset desain 3D serta kode sumber. Dilengkapi fitur pratinjau interaktif, optimasi performa gambar tingkat tinggi, dan kurasi komponen UI kustom.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=300&q=80',
    status: 'konsep',
  },
  {
    id: '7',
    title: 'Solitary Spark: Mechanical Dawn',
    category: 'game',
    description: 'Sebuah game petualangan teka-teki 3D bertema Coming-of-Age fiksi ilmiah tentang seorang penemu muda yang terisolasi, dalam game ini pemain diharuskan menyelesaikan beberapa teka-teki berantai dari yang termudah sampai yang sangat menantang. game ini fokus untuk menguji kemampuan pemain untuk menyelesaikan teka-teki secara berantai.',
    tags: ['Godot Engine', 'GDScript', 'Blender', '3D Modeling'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=300&q=80',
    status: 'konsep',
  }
];
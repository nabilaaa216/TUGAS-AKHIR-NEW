import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

function Tentang() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollToHashElement />

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#040148" }}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/public/image/LOGO VR.png" alt="Logo" height="100" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Beranda</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/#tentang">Tentang</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#layanan">Layanan</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#alasan">Alasan</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#rute">Rute</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#armada">Armada</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#faq">FAQ</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#testimoni">Testimoni</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#kontak">Kontak</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Pesan">Pesan</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Konten Tentang */}
      <div className="container py-5">
        <h1>✨ Tentang Velocity Rent – Travel & Sewa Mobil Profesional</h1>
        <p>
          Velocity Rent adalah penyedia layanan transportasi yang telah berdiri sejak tahun 2020,
          dan berkomitmen untuk memberikan pengalaman perjalanan yang aman, nyaman,
          dan profesional bagi setiap pelanggan. Kami hadir untuk memenuhi kebutuhan Anda
          akan layanan travel dan sewa mobil dengan sistem yang mudah, cepat, dan transparan.
        </p>

        <h2>🚗 Layanan yang Kami Sediakan</h2>
        <ol>
          <li>
            <strong>Sewa Mobil:</strong>
            <ul>
              <li>Lepas Kunci – Cocok bagi Anda yang ingin berkendara sendiri dengan lebih fleksibel.</li>
              <li>Dengan Sopir – Ditemani sopir profesional yang berpengalaman dan ramah.</li>
              <li>Paket Harian / Mingguan / Bulanan – Fleksibel sesuai kebutuhan Anda.</li>
              <li>Sewa untuk acara khusus – Pernikahan, dinas, event kantor, dan sebagainya.</li>
            </ul>
          </li>
          <li>
            <strong>Travel Antar Kota & Antar Jemput:</strong>
            <ul>
              <li>Travel antar kota (Semarang, Jakarta, Surabaya, dan lainnya)</li>
              <li>Antar jemput bandara, stasiun, hotel</li>
              <li>Wisata keluarga atau rombongan kecil</li>
              <li>Trip pariwisata & ziarah</li>
            </ul>
          </li>
        </ol>
        <p>
          Semua armada kami dilengkapi dengan AC, kebersihan terjaga, serta fasilitas kenyamanan bagi penumpang.
        </p>

        <h2>🚘 Armada Unggulan Kami</h2>
        <p>Kami menyediakan berbagai tipe kendaraan yang bisa Anda pilih, seperti:</p>
        <ul>
          <li>Toyota Avanza</li>
          <li>Toyota Innova</li>
          <li>Toyota Fortuner</li>
          <li>Dan masih banyak lagi</li>
        </ul>
        <p>Semua kendaraan rutin dicek, diasuransikan, dan selalu siap jalan.</p>

        {/* Tombol Kembali */}
        <div className="mt-4">
          <Link to="/" className="btn btn-primary">← Kembali ke Beranda</Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-custom text-white text-center py-3">
        <p className="mb-0">&copy; Velocity Rent 2025 | Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}

export default Tentang;

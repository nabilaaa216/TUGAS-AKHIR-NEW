import { Link } from 'react-router-dom';
import './Galeri.css';

function Galeri() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#040148" }}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/public/image/LOGO VR.png" alt="Logo" height="100" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Beranda</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#tentang">Tentang</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#layanan">Layanan</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#alasan">Alasan</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#rute">Rute</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#armada">Armada</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#faq">FAQ</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/#testimoni">Testimoni</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#kontak">Kontak</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Pesan">Pesan</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Galeri Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Galeri Mobil & Travel</h2>

        <div className="row justify-content-center">
          {[
            "galeri 1.jpg",
            "galeri 2.png",
            "galeri 3.png",
            "galeri 4.jpg",
            "galeri 5.jpeg",
            "galeri 6.jpg",
            "galeri 7.avif",
            "galeri 8.jpg",
            "galeri 9.jpg",
            "galeri 10.jpg",
          ].map((img, idx) => (
            <div className="col-md-4 mb-3 fade-in" key={idx}>
              <img
                src={`/image/${img}`}
                className="img-fluid rounded gallery-img"
                alt={`Galeri ${idx + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
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

export default Galeri;

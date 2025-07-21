import { useState } from "react";
import { Link } from "react-router-dom";
import "./Pesan.css";

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

function Pesan() {
  const [formData, setFormData] = useState({
    nama: "",
    noHp: "",
    tanggal: "",
    tujuan: "",
    layanan: "",
    jenis: "",
    armada: "",
  });

  const [alert, setAlert] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((val) => val.trim() === "")) {
      setAlert("Mohon isi semua data dengan lengkap.");
      return;
    }

    setAlert("Pesanan Anda berhasil dikirim!");
    setFormData({
      nama: "",
      noHp: "",
      tanggal: "",
      tujuan: "",
      layanan: "",
      jenis: "",
      armada: "",
    });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
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
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" && location.hash === "" ? "active" : ""}`} to="/">Beranda</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.hash === "#tentang" ? "active" : ""}`} to="/#tentang">Tentang</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.hash === "#layanan" ? "active" : ""}`} to="/#layanan">Layanan</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.hash === "#alasan" ? "active" : ""}`} to="/#alasan">Alasan</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.hash === "#rute" ? "active" : ""}`} to="/#rute">Rute</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.hash === "#armada" ? "active" : ""}`} to="/#armada">Armada</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.hash === "#faq" ? "active" : ""}`} to="/#faq">FAQ</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.hash === "#testimoni" ? "active" : ""}`} to="/#testimoni">Testimoni</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.hash === "#kontak" ? "active" : ""}`} to="/#kontak">Kontak</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/Pesan" ? "active" : ""}`} to="/Pesan">Pesan</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container py-5">
        <h2 className="text-center mb-4">Form Pemesanan</h2>
        {alert && (
          <div className="alert alert-info text-center" role="alert">
            {alert}
          </div>
        )}

        <form onSubmit={handleSubmit} className="row g-3 justify-content-center">
          <div className="col-md-6">
            <label className="form-label">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              className="form-control"
              value={formData.nama}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Nomor HP</label>
            <input
              type="text"
              name="noHp"
              className="form-control"
              value={formData.noHp}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Tanggal Keberangkatan</label>
            <input
              type="date"
              name="tanggal"
              className="form-control"
              value={formData.tanggal}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Tujuan</label>
            <input
              type="text"
              name="tujuan"
              className="form-control"
              value={formData.tujuan}
              onChange={handleChange}
            />
          </div>

          {/* Pilihan Layanan */}
          <div className="col-md-6">
            <label className="form-label">Pilih Layanan</label>
            <select
              name="layanan"
              className="form-select"
              value={formData.layanan}
              onChange={handleChange}
            >
              <option value="">-- Pilih Layanan --</option>
              <option value="Travel">Travel / Shuttle</option>
              <option value="Sewa">Sewa / Rental Mobil</option>
            </select>
          </div>

          {/* Jenis Mobil/Travel */}
          <div className="col-md-6">
            <label className="form-label">Jenis Mobil / Travel</label>
            <select
              name="jenis"
              className="form-select"
              value={formData.jenis}
              onChange={handleChange}
            >
              <option value="">-- Pilih Jenis --</option>
              <option value="Reguler">Reguler</option>
              <option value="Premium">Premium</option>
              <option value="Eksekutif">Eksekutif</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Pilih Armada</label>
            <select
              name="armada"
              className="form-select"
              value={formData.armada}
              onChange={handleChange}
            >
              <option value="">-- Pilih Armada --</option>
              <option value="Avanza">Avanza</option>
              <option value="Brio">Brio</option>
              <option value="Fortuner">Fortuner</option>
              <option value="Harce">Harce</option>
              <option value="Calya">Calya</option>
              <option value="Mobilio">Mobilio</option>
              <option value="Inova">Inova</option>
              <option value="Xpander">Xpander</option>
              <option value="Yaris">Yaris</option>
              <option value="Granace">Granace</option>
            </select>
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-danger px-4 me-3">
              Kirim Pesanan
            </button>
            <Link to="/" className="btn btn-primary px-4">
              Kembali ke Beranda
            </Link>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="footer-custom text-white text-center py-3">
        <p className="mb-0">&copy; Velocity Rent 2025 | Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}

export default Pesan;

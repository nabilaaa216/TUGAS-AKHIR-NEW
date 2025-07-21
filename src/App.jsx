import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; //untuk navigasi antar bagian
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location]);

  const [testimoni, setTestimoni] = useState([
    {
      nama: 'Amil, Jakarta',
      isi: 'Pelayanan cepat dan sopir ramah. Mobil dalam kondisi dan nyaman, sangat direkomendasikan!',
      rating: 5,
    },
    {
      nama: 'Sari, Semarang',
      isi: 'Saya pesan Toyota Innova untuk perjalanan bisnis, sangat nyaman dan harga sesuai. Proses pemesanan juga mudah.',
      rating: 5,
    },
    {
      nama: 'Nadya, Bandung',
      isi: 'Booking online langsung diproses, mobil diantar tepat waktu. Terima kasih Velocity Rent, sangat profesional!',
      rating: 5,
    },
  ]);

  const [namaInput, setNamaInput] = useState('');
  const [isiInput, setIsiInput] = useState('');
  const [ratingInput, setRatingInput] = useState(5);
  const [ruteTerpilih, setRuteTerpilih] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (namaInput && isiInput && ratingInput) {
      setTestimoni((prev) => [...prev, { nama: namaInput, isi: isiInput, rating: ratingInput }]);
      setNamaInput('');
      setIsiInput('');
      setRatingInput(5);
    }
  };

  const armadaData = [
    {
      nama: 'Toyota Fortuner',
      gambar: 'fortuner.png',
      deskripsi: 'SUV premium untuk kenyamanan ekstra dan performa tinggi, cocok untuk perjalanan jarak jauh.',
      kapasitas: 7,
      kategoriHarga: 'premium',
      harga: [
        { jenis: 'Sewa Harian', harga: 700000 },
        { jenis: 'Sewa Mingguan', harga: 4500000 },
        { jenis: 'Sewa Bulanan', harga: 17000000 },
        { jenis: 'Drop Off', harga: 500000 },
      ],
    },
    {
      nama: 'Toyota Avanza',
      gambar: 'avanza.png',
      deskripsi: 'MPV praktis untuk kebutuhan keluarga sehari-hari dengan konsumsi bahan bakar efisien.',
      kapasitas: 7,
      kategoriHarga: 'medium',
      harga: [
        { jenis: 'Sewa Harian', harga: 450000 },
        { jenis: 'Sewa Mingguan', harga: 2800000 },
        { jenis: 'Sewa Bulanan', harga: 10000000 },
        { jenis: 'Drop Off', harga: 300000 },
      ],
    },
    {
      nama: 'Honda Brio Tipe RS (CVT)',
      gambar: 'brio.png',
      deskripsi: 'City car mungil yang cocok untuk mobilitas perkotaan dengan performa lincah.',
      kapasitas: 4,
      kategoriHarga: 'low',
      harga: [
        { jenis: 'Sewa Harian', harga: 350000 },
        { jenis: 'Sewa Mingguan', harga: 2200000 },
        { jenis: 'Sewa Bulanan', harga: 8500000 },
        { jenis: 'Drop Off', harga: 250000 },
      ],
    },
    {
      nama: 'Toyota Calya',
      gambar: 'calya.png',
      deskripsi: 'Mobil hemat biaya dengan ruang kabin luas, cocok untuk keluarga kecil.',
      kapasitas: 7,
      kategoriHarga: 'low',
      harga: [
        { jenis: 'Sewa Harian', harga: 400000 },
        { jenis: 'Sewa Mingguan', harga: 2500000 },
        { jenis: 'Sewa Bulanan', harga: 9000000 },
        { jenis: 'Drop Off', harga: 270000 },
      ],
    },
    {
      nama: 'Honda Mobilio',
      gambar: 'mobilio.png',
      deskripsi: 'MPV dengan performa mesin halus dan ruang bagasi luas, cocok untuk rombongan.',
      kapasitas: 7,
      kategoriHarga: 'medium',
      harga: [
        { jenis: 'Sewa Harian', harga: 480000 },
        { jenis: 'Sewa Mingguan', harga: 3000000 },
        { jenis: 'Sewa Bulanan', harga: 11000000 },
        { jenis: 'Drop Off', harga: 350000 },
      ],
    },
    {
      nama: 'Toyota Innova Reborn',
      gambar: 'inova.png',
      deskripsi: 'MPV nyaman untuk perjalanan jauh dengan ruang kabin lega dan fitur modern.',
      kapasitas: 7,
      kategoriHarga: 'medium',
      harga: [
        { jenis: 'Sewa Harian', harga: 550000 },
        { jenis: 'Sewa Mingguan', harga: 3200000 },
        { jenis: 'Sewa Bulanan', harga: 12000000 },
        { jenis: 'Drop Off', harga: 400000 },
      ],
    },
    {
      nama: 'All-New Yaris Cross',
      gambar: 'yaris.png',
      deskripsi: 'Hatchback bergaya sporty, cocok untuk anak muda yang aktif dan dinamis.',
      kapasitas: 5,
      kategoriHarga: 'medium',
      harga: [
        { jenis: 'Sewa Harian', harga: 500000 },
        { jenis: 'Sewa Mingguan', harga: 3100000 },
        { jenis: 'Sewa Bulanan', harga: 11500000 },
        { jenis: 'Drop Off', harga: 370000 },
      ],
    },
    {
      nama: 'Mitsubishi Xpander',
      gambar: 'xpander.png',
      deskripsi: 'MPV modern dengan desain futuristik dan suspensi nyaman untuk segala medan.',
      kapasitas: 7,
      kategoriHarga: 'medium',
      harga: [
        { jenis: 'Sewa Harian', harga: 520000 },
        { jenis: 'Sewa Mingguan', harga: 3300000 },
        { jenis: 'Sewa Bulanan', harga: 12500000 },
        { jenis: 'Drop Off', harga: 390000 },
      ],
    },
  ];

  const [filterHarga, setFilterHarga] = useState('');
  const [filterKapasitas, setFilterKapasitas] = useState(null);
  const armadaFiltered = armadaData.filter((mobil) => {
    const cocokHarga = filterHarga ? mobil.kategoriHarga === filterHarga : true;
    const cocokKapasitas = filterKapasitas ? mobil.kapasitas === filterKapasitas : true;
    return cocokHarga && cocokKapasitas;
  });
  const handleShowModal = (judul, gambar, deskripsi) => {
    setRuteTerpilih({ judul, gambar, deskripsi });
  };
  const [selectedMobil, setSelectedMobil] = useState(null);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#040148' }}>
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

      {/* Banner Rental */}
      <section className="banner-rental">
        <div className="container-fluid p-0">
          <img
            src="/public/image/VELOCITY RENT.png"
            alt="Banner Rental"
            className="img-fluid w-100 shadow"
          />
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="/image/VR.png"
                alt="Iklan Mobil"
                className="w-10 rounded shadow"
                style={{ borderRadius: '50px' , width: '70%', height: 'auto'}}
              />
            </div>

            <div className="col-md-6">
              <h2>Tentang Kami</h2>
              <p>
                Velocity Rent adalah penyedia layanan travel dan sewa mobil yang profesional dan terpercaya. 
                Kami melayani perjalanan antar kota, wisata, hingga antar jemput bandara, 
                serta menyediakan berbagai armada seperti Avanza, Innova, Fortuner, dan lainnya.
                Tersedia opsi lepas kunci, dengan sopir, dan paket perjalanan, 
                semua dengan harga terjangkau dan pelayanan maksimal.
              </p>
              <a href="/tentang" className="btn btn-primary">Selengkapnya</a>
            </div>
          </div>
        </div>
      </section>

      {/* Layayanan */}
      <section id="layanan" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-5 text-dark">Layanan Velocity Rent</h2> {/* Judul jadi warna hitam */}
          <div className="row justify-content-center g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <img src="/image/Travel Mobil.jpg" className="card-img-top rounded" alt="Travel"/>
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">Travel / Shuttle</h5>
                  <p className="card-text text-dark">Solusi perjalanan antar kota dengan rute fleksibel dan waktu keberangkatan yang efisien.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <img src="/image/testi 1.jpg" className="card-img-top rounded" alt="Sewa Mobil" />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">Sewa / Rental Mobil</h5>
                    <p className="card-text text-dark">Beragam pilihan mobil siap disewa, dari city car hingga SUV, untuk kebutuhan harian maupun khusus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </section>

      {/* Alasan */}
      <section id="alasan" className="py-5 text-center bg-white">
        <div className="container">
          <h3 className="mb-3 fw-semibold text-black">3 Alasan memilih kami</h3>
          <hr style={{ width: '200px', margin: '0 auto', borderTop: '2px solid black' }} />
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
            {/* Pelayanan Memuaskan */}
            <div className="col">
              <div className="p-3">
                <div style={{ fontSize: '3rem' }}>👌</div>
                <h5 className="mt-3 fw-bold text-black">Pelayanan Memuaskan</h5>
                <p className="text-black">
                  Kami memberikan pelayanan ramah kepada pelanggan kami merasakan kepuasan dalam perjalanannya.
                </p>
              </div>
            </div>

            {/* Sewa/Rental Mobil */}
            <div className="col">
              <div className="p-3">
                <div style={{ fontSize: '3rem' }}>🫰</div>
                <h5 className="mt-3 fw-bold text-black">Sewa/Rental Mobil</h5>
                <p className="text-black">
                  Sewa kebutuhan transportasi pariwisata, bisnis, dll.
                </p>
              </div>
            </div>

            {/* Paket Wisata */}
            <div className="col">
              <div className="p-3">
                <div style={{ fontSize: '3rem' }}>🧠</div>
                <h5 className="mt-3 fw-bold text-black">Paket Wisata</h5>
                <p className="text-black">
                  Teman perjalanan Anda. Tersedia paket wisata ke destinasi favorit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Pertanyaan Umum</h2>
          <div className="accordion" id="faqAccordion">
            {/* Pertanyaan 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  Bagaimana cara memesan?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Anda dapat melakukan pemesanan melalui halaman "Pesan" atau langsung hubungi kami via WhatsApp.
                </div>
              </div>
            </div>
            {/* Pertanyaan 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  Apa saja layanan yang tersedia?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Kami menyediakan: Sewa Harian, Bulanan, Dengan Sopir, Lepas Kunci, Antar Jemput, dan Layanan Darurat.
                </div>
              </div>
            </div>
            {/* Pertanyaan 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                  Apakah bisa sewa tanpa sopir?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Ya, kami menyediakan opsi lepas kunci (tanpa sopir) untuk pelanggan yang memenuhi syarat dan ketentuan.
                </div>
              </div>
            </div>
            {/* Pertanyaan 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                  Dokumen apa saja yang dibutuhkan untuk menyewa?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Anda perlu menyiapkan KTP, SIM A, dan bukti alamat atau dokumen pendukung lainnya sesuai kebijakan kami.
                </div>
              </div>
            </div>
            {/* Pertanyaan 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                  Apakah tersedia layanan antar-jemput?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Tentu, kami menyediakan layanan antar-jemput kendaraan ke lokasi Anda dengan biaya tambahan tergantung jarak.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rute Travel */}
      <section id="rute" className="py-5 bg-white text-dark text-center">
        <div className="container">
          <h2 className="fw-bold mb-4 text-primary">Rute Travel</h2>
          <hr style={{ width: '200px', margin: '0 auto', borderTop: '2px dottedrgb(0, 0, 0)' }} />

          <div className="row row-cols-1 row-cols-md-2 g-5 mt-4">
            <div className="col d-flex">
              <img src="/image/harce.png" alt="Elf Travel" className="img-fluid rounded shadow me-4" style={{ maxWidth: '250px' }} />
              <div className="text-start">
                <h5 className="fw-bold text-primary">Pekalongan - Jakarta</h5>
                <p><strong>Armada Exclusive :</strong></p>
                <p className="mb-0">Innova, Hiace, Elf, Xpander, Avanza, dll. Bebas biaya tambahan, area penjemputan luas.</p>
                <button
                  className="btn btn-primary text-white fw-bold mt-2"
                  onClick={() =>
                    handleShowModal(
                      'Pekalongan - Jakarta',
                      '/image/harce.png',
                      'Perjalanan dari Pekalongan menuju Jakarta bersama Velocity Rent menawarkan kenyamanan, ketepatan waktu, dan fleksibilitas lokasi penjemputan. Kami melayani berbagai kebutuhan, mulai dari perjalanan pribadi, bisnis, hingga kunjungan keluarga. Dengan pengemudi profesional, proses pemesanan mudah, dan harga bersaing, perjalanan Anda akan lebih nyaman dan aman bersama Velocity Rent',
                    )
                  }
                >
                  Detail
                </button>
              </div>
            </div>

            <div className="col d-flex flex-md-row-reverse">
              <img src="/image/granace.png" alt="Hiace Travel" className="img-fluid rounded shadow ms-4" style={{ maxWidth: '250px' }} />
              <div className="text-start">
                <h5 className="fw-bold text-primary">Jakarta - Pekalongan</h5>
                <p><strong>Armada Exclusive :</strong></p>
                <p className="mb-0">Driver profesional & mobil bersih. Rute cepat dan aman ke Pekalongan.</p>
                <button
                  className="btn btn-primary text-white fw-bold mt-2"
                  onClick={() =>
                    handleShowModal(
                      'Jakarta - Pekalongan',
                      '/image/granace.png',
                      'Perjalanan dari Jakarta menuju Pekalongan bersama Velocity Rent memberikan kenyamanan optimal dengan layanan profesional dan tepat waktu. Cocok untuk keperluan dinas, mudik, atau liburan keluarga. Setiap perjalanan didukung oleh pengemudi berpengalaman yang menjamin keselamatan, kenyamanan, dan keramahan selama perjalanan.'
                    )
                  }
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Armada Kami */}
      <section id="armada" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Armada Kami</h2>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {armadaData?.length > 0 && armadaData.map((mobil, idx) => (
            <div className="col" key={idx}>
              <div
                className="card h-100 d-flex flex-column shadow card-anim"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={`/image/${mobil.gambar}`}
                  className="card-img-top"
                  alt={mobil.nama}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedMobil(selectedMobil === idx ? null : idx)}
                />
                <div className="card-body d-flex flex-column text-dark">
                  <h5 className="card-title">{mobil.nama}</h5>
                  <p className="card-text">{mobil.deskripsi}</p>
                  <p className="mb-1"><strong>Kapasitas:</strong> {mobil.kapasitas} penumpang</p>
                  <p className="mb-1"><strong>Kategori Harga:</strong> {mobil.kategoriHarga}</p>
                  <div className={`daftar-harga ${selectedMobil === idx ? 'show' : ''} mt-3`}>
                    <h6>Daftar Harga:</h6>
                    <ul className="list-group list-group-flush">
                      {mobil.harga.map((item, i) => (
                        <li className="list-group-item" key={i}>
                          {item.jenis} - Rp {item.harga.toLocaleString("id-ID")}
                        </li>
                      ))}
                    </ul>
                    <a href="/Pesan" className="btn btn-primary mt-3">Pesan Sekarang</a>
                  </div>
                  <button
                    className="btn btn-outline-primary mt-auto"
                    onClick={() => setSelectedMobil(selectedMobil === idx ? null : idx)}
                  >
                    {selectedMobil === idx ? "Tutup Harga" : "Lihat Harga"}
                  </button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Apa Kata Pelanggan Kami</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
            {testimoni.map((t, idx) => (
              <div className="col" key={idx}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <p className="card-text">"{t.isi}"</p>
                    <h6 className="card-subtitle text-muted mt-3">– {t.nama}</h6>
                    <div className="mt-2 text-warning">{'⭐'.repeat(t.rating)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h5 className="text-center mb-3">Kirim Testimoni Anda</h5>
          <form onSubmit={handleSubmit} className="row justify-content-center align-items-end">
            <div className="col-md-4 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nama Anda"
                value={namaInput}
                onChange={(e) => setNamaInput(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Pesan Anda"
                value={isiInput}
                onChange={(e) => setIsiInput(e.target.value)}
                required
              />
            </div>
            <div className="col-md-2 mb-2">
              <select
                className="form-select"
                value={ratingInput}
                onChange={(e) => setRatingInput(Number(e.target.value))}
                required
              >
                <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
                <option value={4}>⭐⭐⭐⭐ (4)</option>
                <option value={3}>⭐⭐⭐ (3)</option>
                <option value={2}>⭐⭐ (2)</option>
                <option value={1}>⭐ (1)</option>
              </select>
            </div>
            <div className="col-md-2 mb-2 d-grid">
              <button type="submit" className="btn btn-primary w-100">Kirim</button>
            </div>
          </form>
          <div className="text-center mt-4">
           <a href="/galeri" className="btn btn-primary">
              Lihat Galeri Kami
            </a>
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="py-5 text-center">
        <div className="container">
          <h2>Hubungi Kami</h2>
          <p>Untuk informasi lebih lanjut atau pemesanan langsung, hubungi kami:</p>
          <a href="https://wa.me/6281326458028" className="btn btn-success">WhatsApp Admin</a>
        </div>
      </section>

      {/* Modal Detail Rute */}
      {ruteTerpilih && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header">
                <h5 className="modal-title">{ruteTerpilih.judul}</h5>
                <button type="button" className="btn-close" onClick={() => setRuteTerpilih(null)}></button>
              </div>
              <div className="modal-body text-center">
                <img src={ruteTerpilih.gambar} className="img-fluid rounded mb-3" alt="Detail Rute" />
                <p className="text-start">{ruteTerpilih.deskripsi}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setRuteTerpilih(null)}>Tutup</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer-custom text-white text-center py-3">
        <p className="mb-0">&copy; Velocity Rent 2025 | Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}

export default App;

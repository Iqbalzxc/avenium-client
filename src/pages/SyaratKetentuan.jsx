import { Container, Row, Col } from 'react-bootstrap';

const SyaratKetentuan = () => {
  return (
    <div className='syarat-ketentuan'>
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row className='py-3'>
            <Col>
              <h1 className='fw-bold text-center mb-2'>Syarat & Ketentuan</h1>
              <p className='text-center'>Selamat datang di layanan joki tugas kami. Berikut adalah syarat dan ketentuan yang berlaku untuk menggunakan layanan kami:</p>
            </Col>
          </Row>
          <Row className='pt-4'>
            <Col>
              <h4 className='fw-bold'>1. Definisi</h4>
              <p>1.1. <strong>Layanan Jasa:</strong> Jasa DIJOKI adalah layanan yang membantu menyelesaikan tugas akademik siswa dan mahasiswa.</p>
              <p>1.2. <strong>Pelanggan:</strong> Individu yang menggunakan layanan joki tugas kami.</p>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col>
              <h4 className='fw-bold'>2. Lingkup Layanan</h4>
              <p>2.1. Layanan yang diberikan mencakup penyelesaian tugas sekolah dan kuliah sesuai dengan permintaan pelanggan.</p>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col>
              <h4 className='fw-bold'>3. Proses Pemesanan</h4>
              <p>3.1. Pelanggan menghubungi kami melalui kontak yang disediakan dan mengirimkan detail tugas yang akan diselesaikan.</p>
              <p>3.2. Kami akan memberikan penawaran harga dan estimasi waktu penyelesaian.</p>
              <p>3.3. Pelanggan harus melakukan pembayaran awal sebesar 50% dari total biaya sebelum pekerjaan dimulai.</p>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col>
              <h4 className='fw-bold'>4. Pembayaran</h4>
              <p>4.1. Pembayaran dilakukan dalam dua tahap: 50% di awal dan 50% setelah tugas selesai.</p>
              <p>4.2. Pembayaran bisa dilakukan melalui metode yang telah kami sediakan (transfer bank, e-wallet, dll).</p>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col>
              <h4 className='fw-bold'>5. Revisi dan Garansi</h4>
              <p>5.1. Pelanggan berhak atas revisi jika hasil tugas tidak sesuai dengan instruksi awal.</p>
              <p>5.2. Revisi diberikan secara gratis selama masih sesuai dengan instruksi awal. Jika diluar instruksi akan diberikan biaya tambahan.</p>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col>
              <h4 className='fw-bold'>6. Kebijakan Pembatalan</h4>
              <p>6.1. Pelanggan dapat membatalkan pesanan sebelum tugas dimulai dengan pengembalian uang penuh.</p>
              <p>6.2. Pembatalan setelah tugas dimulai akan dikenakan biaya sesuai dengan progres pekerjaan.</p>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col>
              <h4 className='fw-bold'>7. Kebijakan Privasi</h4>
              <p>7.1. Semua informasi dan data yang diberikan oleh pelanggan akan dijaga kerahasiaannya.</p>
              <p>7.2. Kami tidak akan membagikan informasi pelanggan kepada pihak ketiga tanpa izin pelanggan.</p>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col>
              <h4 className='fw-bold'>8. Tanggung Jawab</h4>
              <p>8.1. Kami tidak bertanggung jawab atas penggunaan hasil tugas oleh pelanggan yang melanggar kebijakan akademik institusi pendidikan.</p>
              <p>8.2. Kami tidak bertanggung jawab atas kerugian atau kerusakan yang timbul akibat penggunaan layanan kami.</p>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col>
              <h4 className='fw-bold'>9. Perubahan Syarat dan Ketentuan</h4>
              <p>9.1. Kami berhak untuk mengubah syarat dan ketentuan ini kapan saja tanpa pemberitahuan sebelumnya.</p>
              <p>9.2. Pelanggan diharapkan untuk secara berkala memeriksa syarat dan ketentuan ini untuk mengetahui perubahan terbaru.</p>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col>
              <h4 className='fw-bold'>10. Kontak</h4>
              <p>10.1. Untuk pertanyaan lebih lanjut atau bantuan, pelanggan dapat menghubungi kami melalui email atau nomor telepon yang disediakan.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SyaratKetentuan;
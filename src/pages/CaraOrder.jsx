import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

const CaraOrder = () => {
  return (
    <div className='cara-order'>
      <div className="cara-order min-vh-100">
        <Container>
          <Row className='py-3'>
            <Col>
              <h1 className='fw-bold text-center mb-2'>Cara Order</h1>
            </Col>
          </Row>
          <Row className='pt-5'>
            <Col>
              <p>Berikut adalah langkah-langkah untuk melakukan order di layanan kami. Silahkan ikuti instruksi di bawah ini:</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 className='fw-bold'>1. Hubungi Kami via WhatsApp</h4>
              <p>Anda dapat menghubungi kami melalui WhatsApp dengan mengklik ikon di bawah ini:</p>
              <a href="https://wa.me/6285295454278" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                <FaWhatsapp /> Hubungi Kami
              </a>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col>
              <h4 className='fw-bold'>2. Konfirmasi Harga dengan Admin</h4>
              <p>Setelah menghubungi kami, admin akan memberikan detail harga berdasarkan kebutuhan Anda. Pastikan untuk menyebutkan detail layanan yang Anda butuhkan agar kami dapat memberikan estimasi yang tepat. Estimasi harga akan diberikan berdasarkan jenis layanan, durasi, dan kebutuhan spesifik lainnya.</p>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col>
              <h4 className='fw-bold'>3. Pembayaran Deposit</h4>
              <p>Setelah harga dikonfirmasi, Anda akan diminta untuk membayar deposit sebesar 50% dari total biaya. Pembayaran deposit ini diperlukan untuk mengamankan slot layanan Anda. Detail pembayaran akan diberikan oleh admin, termasuk nomor rekening atau metode pembayaran lainnya.</p>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col>
              <h4 className='fw-bold'>4. Pelunasan Setelah Selesai</h4>
              <p>Setelah layanan selesai, Anda akan diminta untuk melunasi sisa pembayaran. Pelunasan ini harus dilakukan sebelum hasil layanan dikirimkan kepada Anda. Admin akan mengkonfirmasi penerimaan pelunasan dan memastikan semua kebutuhan Anda telah terpenuhi sebelum menyelesaikan transaksi.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CaraOrder;

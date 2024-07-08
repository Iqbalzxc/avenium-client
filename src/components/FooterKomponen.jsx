import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterKomponen = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">DiJoKi</h3>
            <p className="desc">
              Terbaik untuk Anda
            </p>
            <div className="no mt-3">
              <Link className="text-decoration-none">
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
          <h5 className="fw-bold">Menu</h5>
          <Link to="">Home</Link>
          <Link to="layanan">Layanan</Link>
          <Link to="cara-order">Cara Order</Link>
          <Link to="faq">FAQ</Link>
          <Link to="syarat-ketentuan">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-2">Media Sosial :</h5>
          <div className="social">
            <a href="https://instagram.com/dijoki.ofc" className="text-decoration-none text-black">Instagram : @DIJOKI.OFFICIAL</a>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by DiJoKi</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterKomponen;

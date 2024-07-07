import { Container, Row, Col } from "react-bootstrap";
import { semuaLayanan } from "../data/index";

const Layanan = () => {
  return (
    <div className="layanan">
      <div className="layanan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Layanan</h1>
              <p className="text-center">
                Layanan yang kami sediakan untuk anda.
              </p>
            </Col>
          </Row>
          <Row>
          {semuaLayanan.map((layanan) => {
              return (
                <Col key={layanan.id} className="shadow rounded-3">
                  <img
                    src={layanan.image}
                    alt="image.jpg"
                    className="w-100 mb-5 rounded"
                  />
                  <h5 className="mb-5 px-3 text-center">{layanan.title}</h5>
                </Col>
              );
            })}
          </Row>
          <p className="text-center pt-5">* Syarat dan ketentuan berlaku</p>
        </Container>
      </div>
    </div>
  );
};

export default Layanan;
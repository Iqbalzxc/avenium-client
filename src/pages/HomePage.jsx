import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";

import { layanan, dataSwiper } from "../data/index";
import {useNavigate} from "react-router-dom";
import FaqKomponen from "../components/FaqKomponen";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center ">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4">
                Tugas Anda <br /> <span>Belum Selesai?</span> <br />
                Kami Solusinya!
              </h1>
              <p className="mb-4">
                Kami adalah layanan jasa yang menawarkan kualitas terbaik dalam membantu tugas-tugas anda sampai selesai!
              </p>
              <button className="btn btn-danger btn-lg rounded rounded-1 me-2 mb-xs-0 mb-2" onClick={() => navigate('/cara-order')}>
                Order Disini
              </button>
              <button className="btn btn-outline-danger btn-lg rounded rounded-1 mb-xs-0 mb-2" onClick={() => navigate('/layanan')}>
                Lihat Layanan
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="image.jpg" className="animate__slideInLeft"/>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="layanan w-100 min-vh-100 ">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Layanan</h1>
              <p className="text-center">
                Layanan yang kami berikan kepada Anda
              </p>
            </Col>
          </Row>
          <Row>
            {layanan.map((layanan) => {
              return (
                <Col key={layanan.id} className="shadow rounded-3"
                >
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
          <Row>
            <Col className="text-center">
              <button className="btn btn-success rounded-5 btn-lg" onClick={() => navigate("/layanan")}>
                Lihat Semua Layanan
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimoni py-5">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold my-5">Testimoni</h1>
            </Col>
          </Row>
          <Row>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataSwiper.map((data) => {
          return <SwiperSlide key={data.id} className="shadow-sm rounded-3">
            <p className="desc">{data.desc}</p>
            <div className="people">
              <img src={data.image} alt="" />
              <div>
                <h5 className="mb-1">{data.name}</h5>
              </div>
            </div>
          </SwiperSlide>
        })}
      </Swiper>
          </Row>
        </Container>
      </div>

      {/* FAQ */}
      <FaqKomponen />
      {/* FAQ */}
    </div>
  );
};

export default HomePage;
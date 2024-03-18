import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/About_Us/AboutUs_1.jpg" alt="Shelter image 1" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/About_Us/AboutUs_2.jpg" alt="Shelter image 2" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/About_Us/AboutUs_3.jpg" alt="Shelter image 3" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/About_Us/AboutUs_4.jpg" alt="Shelter image 4" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/About_Us/AboutUs_5.jpg" alt="Shelter image 5" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/About_Us/AboutUs_6.jpg" alt="Shelter image 6" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/About_Us/AboutUs_7.jpg" alt="Shelter image 7" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/About_Us/AboutUs_8.jpg" alt="Shelter image 8" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/About_Us/AboutUs_9.jpg" alt="Shelter image 9" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/About_Us/AboutUs_0.jpg" alt="Shelter image 10" style={{ width: '100%', height: 'auto' }} />
      </div>
    </Slider>
  );
};

export default Carousel;
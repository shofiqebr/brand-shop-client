
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import SampleNextArrow from './SampleNextArrow';
// import SamplePrevArrow from './SamplePrevArrow'; 

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      Next
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      Prev
    </div>
  );
}

const Slider1 = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    centerMode: true,
    // centerPadding: "300px", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          centerPadding: "300px",
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <h2 className="text-center text-5xl font-semibold p-5">our collections</h2>
      <Slider {...settings}>
        <div className="">
          <img className="lg:h-[497px] h-[216px]"
            src="https://i.ibb.co/QXvwbCM/pexels-photo-810357.webp"
            alt=""
            style={{ margin: "0 auto" }}
          />
        </div>
        <div className="">
          <img className="lg:h-[497px] h-[216px]"
            src="https://i.ibb.co/6vrMGmb/pexels-photo-1007410.jpg"
            alt=""
            style={{ margin: "0 auto" }}
          />
        </div>
        <div >
          <img className="lg:h-[497px] h-[216px]"
            src="https://i.ibb.co/wsJDmWQ/pexels-photo-100653.jpg"
            alt=""
            style={{ margin: "0 auto" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Slider1;

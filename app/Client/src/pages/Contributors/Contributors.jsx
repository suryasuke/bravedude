import React from "react";
import Slider from "react-slick";
import ChromaGrid from "../../ui/ChromaGrid";
import "./Contributors.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../../assets/Images/surya.jpg'


function Contributors() {
  const items = [
    {
      image: img,
      title: "Surya Shanmmugam",
      subtitle: "Founder & CEO",
      handle: "@suryashanuh",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/sarahjohnson",
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      title: "Sathish",
      subtitle: "Backend Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      title: "Keerthana",
      subtitle: "Backend Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen",
    },
  ];

 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    arrows: true,
  };

  const carouselData = [
    {
      img: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
      caption: "Community meet-up Perungudi - Chennai",
    },
    {
      img: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      caption: "Our interactive classroom sessions in Bangalore",
    },
    {
      img: "https://media.istockphoto.com/id/1280385511/photo/colorful-background.jpg?s=612x612&w=0&k=20&c=kj0PRQlgvWLzA1-1me6iZp5mlwsZhC4QlcvIEb1J1bs=",
      caption: "Online live training programs for students worldwide",
    },
  ];

  return (
    <div className="contributors-container">
      <p className="p-class-fst-why">Our Contributors</p>
      <p className="p-class-scnd-why-desc">
        BraveDude Academy is proud to have a team of expertise in all.
        <hr className="hr-contact" />
      </p>

      <ChromaGrid
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />

      <div className="head-p-class">
        <p className="p-class-fst">Our Classes</p>
        <p className="p-class-scnd-class">
          Our office is located in Bangalore and all sessions are also running
          online. <hr className="hr-contact" />
        </p>
       
      </div>

   
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {carouselData.map((slide, idx) => (
            <div key={idx} className="carousel-slide">
              <img src={slide.img} alt={`slide-${idx}`} className="carousel-image" />
              <p className="carousel-caption">{slide.caption}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Contributors;

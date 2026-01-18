import { Image } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "./LogoWrapper.scss";

import "swiper/css";
import "swiper/css/navigation";

import one                from "../../../assets/images/One.png";
import two                from "../../../assets/images/two.png";
import three              from "../../../assets/images/three.png";
import four               from "../../../assets/images/four.png";
import five               from "../../../assets/images/five.png";
import six                from "../../../assets/images/six.png";
import seven              from "../../../assets/images/seven.png";
import eight              from "../../../assets/images/eight.png";
import nine               from "../../../assets/images/nine.png";
import ten                from "../../../assets/images/10.png";
import eleven             from "../../../assets/images/11.png";
import twelve             from "../../../assets/images/12.png";

const LogoSlider = () => {
  const logos = [
    { img: one, link: "https://www.dha.gov.ae" },                // Dubai Health Authority
    { img: two, link: "https://www.seha.ae" },                  // Abu Dhabi Health Services Co. (SEHA)
    { img: three, link: "https://www.doh.gov.ae" },             // Department of Health, UAE
    { img: four, link: "https://www.axa.com" },                 // AXA
    { img: five, link: "https://www.ehealth.com.eg/" },                 // eHealth
    { img: six, link: "https://www.mohap.gov.ae" },            // Ministry of Health & Prevention, UAE
    { img: seven, link: "https://limitlesscare.com" },          // Limitless Care
    { img: eight, link: "https://kanadhospital.com" },          // Kanad Hospital
    { img: nine, link: "https://www.moh.gov.sa" },             // Ministry of Health, Saudi Arabia
    { img: ten, link: "https://mofa.gov.iq/newyork/?page_id=6999&lang=en" },          // Iraqi Ministry of Health
    { img: eleven, link: "https://www.shc.gov.sa" },           // Saudi Health Council
    { img: twelve, link: "https://uhia.gov.eg/" },          // UAE Health Insurance Authority (UHIA)
  ];
  return (
    <div className="logos-wrapper">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        slidesPerView={5}
        spaceBetween={20}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        navigation={{
          nextEl: ".logo-next",
          prevEl: ".logo-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {logos.map((item, index) => (
          <SwiperSlide key={index} style={{
            display:"flex",
            justifyContent:"center",
          }}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                preview={false}
                src={item.img}
                className="logo-img"
                height={160}
                style={{
                  background:"white"
                }}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls */}
      <div className="logo-controls">
        <button className="logo-prev">‹</button>
        <button className="logo-next">›</button>
      </div>
    </div>
  );
};

export default LogoSlider;

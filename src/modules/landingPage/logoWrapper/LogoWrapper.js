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
    { img: one, link: "https://google.com" },
    { img: two, link: "https://facebook.com" },
    { img: three, link: "https://linkedin.com" },
    { img: four, link: "https://twitter.com" },
    { img: five, link: "https://amazon.com" },
    { img: six, link: "https://apple.com" },
    { img: seven, link: "https://microsoft.com" },
    { img: eight, link: "https://netflix.com" },
    { img: nine, link: "https://youtube.com" },
    { img: ten, link: "https://instagram.com" },
    { img: eleven, link: "https://github.com" },
    { img: twelve, link: "https://openai.com" },
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
      >
        {logos.map((item, index) => (
          <SwiperSlide key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                preview={false}
                src={item.img}
                className="logo-img"
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

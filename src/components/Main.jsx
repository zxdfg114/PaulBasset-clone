import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

export default function Hero() {
  return (
    <div className="hero">
      <Swiper
        navigation={true}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        rewind={true}
        loop={true}
        pagination={{
          type: "fraction",
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      >
        <SwiperSlide>
          <div className="main1 main">
            <article>
              <h1>
                HAPPY <br></br> HALLOWEEN
              </h1>
              <p>폴 바셋 할로윈 시즌 음료</p>
              <Link to={"/event/halloween"}>Detail View</Link>
            </article>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main main2">
            <article>
              <h1>Tea & Pistachio</h1>
              <p>가을에 어울리는 티 & 피스타치오</p>
              <Link to={"/event/teaandPistachio"}>Detail View</Link>
            </article>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

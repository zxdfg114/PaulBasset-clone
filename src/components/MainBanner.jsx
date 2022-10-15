import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel } from 'swiper';
import { Link } from "react-router-dom";

export default function MainBanner() {
  console.log(process.env.PUBLIC_URL)
  const events = [
    {
      name: "신메뉴 크라운 추가적립 이벤트",
      description: "크라운 오더로 크라운 주문시 크라운 추가 적립",
      ImgSrc: "/image/mainBanner00.jpg",
      link : "crown"
    },
    {
      name: "자동충전 이벤트",
      description: "5만원 이상 자동 충전시, 1+1 쿠폰 증정",
      ImgSrc: "/image/mainBanner01.jpg",
      link : "autocharge"
    },
    {
      name: "BeanInfo",
      description: "폴 바셋 원두 정보를 알아 보세요",
      ImgSrc: "/image/mainBanner02.jpg",
    },
  ];
  return (
    <div className="main-banner">
      <Swiper
        slidesPerView={2}
        spaceBetween={500}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
      >
        {events.map((data, i) => {
          return (
            <SwiperSlide key={i}>
              <Link to ={process.env.PUBLIC_URL +`/event/${events[i].link}`}>
              <div className="main-banner-item" key={i}>
                <img src={process.env.PUBLIC_URL+events[i].ImgSrc} alt="" />
                <article>
                  <h1>{events[i].name}</h1>
                  <p>{events[i].description}</p>
                </article>
              </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

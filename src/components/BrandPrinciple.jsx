import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

export default function BrandPrinciple() {
  const slideItems = []
  for(let i = 1; i <= 10; i++) {
    slideItems.push("/image/principlesSlide"+i+".jpg")
  }
  console.log(slideItems)

  return (
    <div className="brand-history">
      <section className="principle-title">
        <h1>폴 바셋은 품질과 타협하지 않습니다</h1>
        <span>QUALITY NEVER COMPROMISED</span>
        <p>
          폴 바셋은 ‘품질과 타협하지 않는다’는 브랜드 원칙 아래 최고의 제품과
          서비스를 선보이기 위해 노력하고 있습니다. 한 잔의 완벽한 커피를 만들기
          위해 Seed to Cup을 모토로 생두 선정부터 운송, 보관, 로스팅, 유통,
          그리고 생산에 이르기까지 전 과정을 철저히 관리하며, 매장의 모든
          바리스타가 신선하고 좋은 품질의 원두로 좋은 커피 경험을 제공하기 위해
          노력하고 있습니다.
        </p>
      </section>
      <section className="principle-slide">
        <img src={process.env.PUBLIC_URL + "/image/slideBg01.jpg"} alt="" />
        <Swiper
      navigation={true}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      rewind={true}
      loop={true}
      pagination={{
        type: "fraction",
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}>
          {
            slideItems.map((data,i)=>{
              return(
              <SwiperSlide key={i}>
                <img src={process.env.PUBLIC_URL+slideItems[i]} alt="" />
              </SwiperSlide>
              )  
            })
          }
        </Swiper>
        <img src={process.env.PUBLIC_URL + "/image/slideBg02.jpg"} alt="" />
      </section>
    </div>
  );
}

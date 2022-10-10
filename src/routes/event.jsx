import React from "react";
import { useParams } from "react-router-dom";
import SubBG from "../components/SubBG";

export default function SubEvent() {
  let { id } = useParams();

  let eventList = [
    {
      name: "crown",
      title: "[프로모션] 신메뉴 크라운 추가적립 이벤트",
      imgSrc: "../image/crownEvent.jpg",
    },
    {
      name: "halloween",
      title: "[신제품] 할로윈 음료 3종",
      imgSrc: "../image/halloweenEvent.jpg",
    
    },
    {
      name: "autocharge",
      title: "[프로모션] 5만원 이상 자동 충전시 1+1 쿠폰증정",
      imgSrc: "../image/autoChargeEvent.jpg",
    },
    {
      name: "teaandPistachio",
      title: "Tea & Pistachio",
      imgSrc: "../image/teapistachio.jpg",
    },
  ];

  const select = eventList.filter((x) => x.name === id);

  return (
    <>
      <SubBG></SubBG>
      <div className="sub-wrap">
        <p>{select[0].title}</p>
        <figure>
          <img src={select[0].imgSrc} alt="이벤트" />
        </figure>
      </div>
    </>
  );
}

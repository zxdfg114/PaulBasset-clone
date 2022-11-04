import React from "react";
import { Link } from "react-router-dom";

const MobileMain = () => {
  return (
    <div className="mobile">
      <section className="say-hi">
        <h2>폴 바셋에 오신걸 환영합니다!</h2>
        <p>
          폴 바셋 소사이어티 회원이 되시면, <br />
          생일 무료음료 쿠폰 및 크라운 적립을 통해 <br />
          다양한 혜택을 누리실 수 있습니다.
        </p>
      </section>
      <div className="form">
        <Link>로그인</Link>
        <Link>회원가입</Link>
      </div>
      <div className="mobile-menu">
        <div className="item item1">
          <span>Crown order</span>
          <i className="fa fa-user"></i>
        </div>
        <div className="item item2">
          <span>Quick Order</span>
          <i className="fa fa-coffee"></i>
        </div>
        <div className="item item3">
          <i className="fa fa-credit-card"></i>
          <span>Coupon</span>
        </div>
        <div className="item item4">
          <i className="fa fa-gift"></i>
          <span>Gift Item</span>
        </div>
      </div>
    </div>
  );
};

export default MobileMain;

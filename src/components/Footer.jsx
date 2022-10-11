import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TopBtn from "./topBtn";

export default function Footer () {
  const navigate = useNavigate();

  return(
    <footer>
      <TopBtn></TopBtn>
      <div className="footer-left">
        <ul>
          <li><b>개인정보처리방침</b></li>
          <li>신규입점안내</li>
          <li>이용약관</li>
          <li>소사이어티카드 이용약관</li>
          <li>기프트카드 이용약관</li>
          <li>자주하는 질문</li>
          <li>사이트 맵</li>
        </ul>
      <address>
        &copy; 유기백 2022 비상업용 포트폴리오
      </address>
      </div>
      <ul className="social">
        <li>
        <a href={'https://www.facebook.com/paulbassettkorea/'}><i className="fa fa-facebook"></i></a></li>
        <li><a href={'https://www.instagram.com/paulbassettkorea/'}><i className="fa fa-instagram"></i></a></li>
      </ul>
    </footer>
  )
}
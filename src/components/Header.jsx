import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  let ww = window.innerWidth;

  const navigate = useNavigate();
  const [nav, setNav] = useState(true);
  const navList = [
    "ABOUT US",
    "MENU",
    "STORE",
    "SOCIETY",
    "WHATS NEW",
    "E-SHOP",
  ];
  const userList = ["로그인", "회원가입", "문의하기", "채용", "자주하는 질문"];
  let [on, setOn] = useState("");

  useEffect(() => {
    window.addEventListener("resize", () => {
      ww = window.innerWidth;
      if (ww > 780) {
        setNav(true);
        setOn("");
      } else {
        setNav(false);
        setOn("");
      }
    });
  }, []);

  return (
    <>
      <header className={on}>
        <i
          className="fa fa-bars fa-2x"
          onClick={() => {
            setNav(true);
            setOn("on");
          }}
        ></i>
        <Link to={"/"}>
          <div id="logo">
            <img
              src={
                on
                  ? process.env.PUBLIC_URL + "/image/logo_on.png"
                  : process.env.PUBLIC_URL + "/image/logo.png"
              }
              alt="logo"
            />
          </div>
        </Link>
        {nav && (
          <nav>
            <ul id="gnb">
              {ww < 780 && (
                <li>
                  <i
                    className="fa fa-close fa-2x"
                    onClick={() => {
                      setNav(false);
                      setOn("");
                    }}
                  ></i>
                </li>
              )}
              <li
                onMouseOver={() => {
                  setOn("on");
                }}
              >
                <Link to={"/Brand"}>ABOUT US *</Link>
                <ul
                  className={`sub ${on}`}
                  onMouseLeave={() => {
                    setOn("");
                  }}
                >
                  <li>
                    <Link to={"/Brand"}>Brand *</Link>
                  </li>
                  <li>회사소개</li>
                  <li>CSR</li>
                </ul>
              </li>
              <li
                onMouseOver={() => {
                  setOn("on");
                }}
              >
                <Link to={"/Items"}>MENU *</Link>
                <ul
                  className={`sub ${on}`}
                  onMouseLeave={() => {
                    setOn("");
                  }}
                >
                  <li>
                    <Link to={"/items"}>New *</Link>
                  </li>
                  <li>Coffee</li>
                  <li>BEVERAGE</li>
                  <li>ICE-CREAM</li>
                  <li>FOOD</li>
                  <li>PRODUCT</li>
                </ul>
              </li>
              <li
                onMouseOver={() => {
                  setOn("on");
                }}
              >
                <Link to={"/find"}>STORE *</Link>
                <ul
                  className={`sub ${on}`}
                  onMouseLeave={() => {
                    setOn("");
                  }}
                >
                  <li>
                    <Link to={"/find"}>매장찾기 *</Link>
                  </li>
                </ul>
              </li>
              <li
                onMouseOver={() => {
                  setOn("on");
                }}
              >
                SOCIETY
                <ul
                  className={`sub ${on}`}
                  onMouseLeave={() => {
                    setOn("");
                  }}
                >
                  <li>Paul Basset Society</li>
                  <li>회원등급혜택</li>
                  <li>e-Card 선물</li>
                  <li>모바일 App안내</li>
                  <li>제휴 혜택 안내</li>
                </ul>
              </li>
              <li
                onMouseOver={() => {
                  setOn("on");
                }}
              >
                WHATS NEW
                <ul
                  className={`sub ${on}`}
                  onMouseLeave={() => {
                    setOn("");
                  }}
                >
                  <li>EVENT/NEWS</li>
                  <li>NOTICE</li>
                </ul>
              </li>
              <li
                onMouseOver={() => {
                  setOn("on");
                }}
              >
                E-SHOP
                <ul
                  className={`sub ${on}`}
                  onMouseLeave={() => {
                    setOn("");
                  }}
                >
                  <li>E-shop 소개</li>
                </ul>
              </li>
            </ul>
          </nav>
        )}

        <div className="header-right">
          <i className="fa fa-user fa-2x"></i>
          <ul className="user">
            {userList.map((item, i) => {
              return (
                <li key={i}>
                  <Link to={"/Login"}>{userList[i]}</Link>
                </li>
              );
            })}
          </ul>
          <ul className="ask">
            <li>신규입점제의</li>
            <li>납품문의</li>
          </ul>
        </div>
      </header>
      {on === "on" ? (
        <div
          className={`sub-wrapper ${on}`}
          onMouseOver={() => {
            setOn("on");
          }}
          onMouseLeave={() => {
            setOn("");
          }}
        ></div>
      ) : null}
    </>
  );
}

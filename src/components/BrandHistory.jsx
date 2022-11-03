import React from "react";

export default function BrandHistory() {
  const variantLogos = [
    {
      title: "SYMBOL",
      desc: `잘 익은 커피 체리의 빛으로부터 영감을 받은
  붉은 색 왕관 디자인으로 제품, 인테리어 등
  다양한 영역에 사용됩니다.`,
      src: "/image/historylogo003.png",
    },
    {
      title: "EMBLEM",
      desc: `폴 바셋을 상징하는 왕관과 워드마크가
      결합된 형태로 매장 사이니지 등 다양한 영역에서
      폴 바셋 브랜드를 전달하고 있습니다`,
      src: "/image/historylogo004.png",
    },
    {
      title: "Heritage LOGO",
      desc: `2003년 월드 바리스타 챔피언 폴 바셋의
      친필 사인으로 만들어진 로고로,
      그가 생각하는 커피 철학과 원칙,
      커피 맛으로부터 출발한 폴 바셋 브랜드의
      진정성을 담은 로고입니다.`,
      src: "/image/historylogo005.png",
    },
    {
      title: "WORDMARK",
      desc: `폴 바셋을 나타내는 글자로 바리스타 폴 바셋의
      친필 사인부터 가독성과 명시성을 높인 영문과
      한글 타입의 디자인으로 간판, 제품 등
      다양한 영역에 사용됩니다.`,
      src: "/image/historylogo006.png",
    },
  ];
  return (
    <>
      <div className="brand-history">
        <article>
          <h1>HISTORY</h1>
          <p>스페셜티 전문 브랜드 폴 바셋은 성장하고 있습니다.</p>
          <ul>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/image/historylogo1.png"}
                alt=""
              />
              <br></br>
              <span>2009</span>
              <br />폴 바셋 1호점
            </li>
            <li>
              {" "}
              <span>2013</span>
              <br />
              엠즈 씨드 설립
            </li>
            <li>
              {" "}
              <span>2018</span>
              <br />
              100호점 오픈
            </li>
            <li>
              {" "}
              <span>2019</span>
              <br />
              브랜드 10주년
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/image/historylogo2.png"}
                alt=""
              />
              <br></br>
              <span>2020</span>
              <br />
              DT 1호점 런칭
            </li>
          </ul>
        </article>
        <article className="historylogo">
          <h1>LOGO</h1>
          <section>
            <img
              src={process.env.PUBLIC_URL + "/image/historylogo003.png"}
              alt=""
            />
            <p>
              <span>베이직 로고</span>
              <br />
              바리스타 챔피언을 상징하는 왕관(Crown)이
              <br /> 강조된 로고로, 바리스타 폴 바셋의 친필사인과 함께 <br />
              브랜드의 정체성과 고유성을 담았습니다.
              <br />
              크라운은 떨어지는 커피를 형상화한 모양으로
              <br /> 전문성을 상징하기도 합니다.
            </p>
          </section>
        </article>
        <section className="vlogo">
          {variantLogos.map((data, i) => {
            return (
              <div className="vlogo-items" key={i}>
                <div>
                  <h2>{variantLogos[i].title}</h2>
                  <p>{variantLogos[i].desc}</p>
                </div>
                <img
                  src={process.env.PUBLIC_URL + variantLogos[i].src}
                  alt=""
                />
              </div>
            );
          })}
        </section>
        <section className="pattern-color">
          <div className="pattern">
            <h2>PATTERN</h2>
            <img src={process.env.PUBLIC_URL + "/image/pattern.png"} alt="" />
          </div>
          <div className="color">
            <h2>COLOR</h2>
            <img src={process.env.PUBLIC_URL + "/image/color.png"} alt="" />
          </div>
        </section>
      </div>
    </>
  );
}

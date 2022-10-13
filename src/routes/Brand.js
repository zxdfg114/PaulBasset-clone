import React, { useState } from "react";
import SubBG from "../components/SubBG";
import BeigeBG from "../components/BeigeBG";
import BrandHistory from "../components/BrandHistory";
import BrandPrinciple from "../components/BrandPrinciple";

export default function Brand() {
  let [tab, setTab] = useState(0);
  const bg = "../image/brandSubVisual.jpg";
  const title = "BRAND";
  const comp = [<BrandHistory />, <BrandPrinciple />];

  return (
    <>
      <SubBG bg={bg} title={title} />
      <div className="sortitems">
        <ul>
          <li
            onClick={() => {
              setTab(0);
            }}
          >
            Brand Identity
          </li>
          <li
            onClick={() => {
              setTab(1);
            }}
          >
            Brand Principle
          </li>
          <li>Interior</li>
          <li>Barista PaulBasset</li>
          <li>Barista</li>
        </ul>
      </div>
      {comp[tab]}
      <BeigeBG></BeigeBG>
    </>
  );
}

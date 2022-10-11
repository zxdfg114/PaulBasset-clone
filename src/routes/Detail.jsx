import React from "react";
import SubBG from "../components/SubBG";
import { useNavigate, useParams } from "react-router-dom";
import itemsData from "../data/items";

export default function Detail () {
  let navigate = useNavigate();
  let { id } = useParams();
  const bg = "../image/subVisual_new.jpg"
  const title = "NEW"
  const idx = itemsData.findIndex((a)=>a.id === parseInt(id)) 

  

  return(
    <>
      <SubBG bg={bg} title={title}/>
      <div className="detail">
        <article>
          <h1>{itemsData[idx].name}</h1>
          <p>{itemsData[idx].desc}</p>
        </article>
        <img src={itemsData[idx].detailSrc} alt="" />
        <div className="tolist" onClick={()=>{navigate('/items')}}>
          LIST
        </div>
      </div>
      <div className="beige-bg"></div>
    </>
  )
}
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from 'react-bootstrap/Card';
import SubBG from "../components/SubBG";
import itemsData from "../data/items";

export default function Items() {
  const bg = "../image/subVisual_new.jpg"
  const title = "NEW"

  const navigate = useNavigate();

  /**
   * 서버에서 끌어다온 데이터라고 일단 가정
   */
  let [data, setData] = useState(itemsData)



  return (
    <>
    <SubBG bg={bg} title={title}></SubBG>
    <div className="sortitems">
      <ul>
        <li onClick={()=>{
          setData(itemsData)
        }}>ALL</li>
        <li onClick={()=>{
          setData(itemsData.filter((x)=>x.category === 'food'))
        }}>Food</li>
        <li onClick={()=>{
          setData(itemsData.filter((x)=>x.category === 'beverage'))
        }}>Beverage</li>
        <li onClick={()=>{
          setData(itemsData.filter((x)=>x.category === 'product'))
        }}>Product</li>
        <li onClick={()=>{
          setData(itemsData.filter((x)=>x.category === 'ice'))
        }}>ICE</li>
      </ul>
    </div>
    <Container fluid="lg">
      <Row>
    {
      data.map((a, i)=>{
        return (
          <Card onClick={()=>{navigate(`/detail/${data[i].id}`)}} style={{ width: '28rem', margin : '1rem' }} key={i} >
          <Card.Img variant="top" src={data[i].src} style={{marginTop : '1rem'}}/>
          <div className="cate">
            {data[i].category}
          </div>
          <Card.Body>
            <Card.Title>{data[i].name}</Card.Title>
            <Card.Text>
          {data[i].desc}
            </Card.Text>
          </Card.Body>
        </Card>
        )
      })
    }

  </Row>
  </Container>

  <div className="beige-bg"></div>
  </>
  )
}
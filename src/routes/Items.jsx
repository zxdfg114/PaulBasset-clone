import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import SubBG from "../components/SubBG";
import itemsData from "../data/items";

export default function Items() {
  const bg = "../image/subVisual_new.jpg"
  const title = "NEW"

  let [data, setData] = useState(itemsData)



  return (
    <>
    <SubBG bg={bg} title={title}></SubBG>
    <div className="sortitems">
      <ul>
        <li onClick={()=>{
          setData(itemsData)
        }}>전체</li>
        <li onClick={()=>{
          setData(itemsData.filter((x)=>x.category === 'food'))
        }}>Food</li>
        <li onClick={()=>{
          setData(itemsData.filter((x)=>x.category === 'beverage'))
        }}>beverage</li>
        <li onClick={()=>{
          setData(itemsData.filter((x)=>x.category === 'product'))
        }}>Product</li>
      </ul>
    </div>
    <Container fluid="lg">
      <Row>
    {
      data.map((a, i)=>{
        return (
          <Card style={{ width: '28rem', margin : '1rem' }} key={i}>
          <Card.Img variant="top" src={data[i].src} />
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
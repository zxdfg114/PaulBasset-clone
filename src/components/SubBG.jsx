import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
  background-image: url(${(props)=>props.bg});
  background-position: center;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledTitle = styled.em`
  color: #fff;
  font-size: 48px;
  font-style: normal;
`
/**
 * 
 * @param {*} props 로 bg랑 제목넣으면
 * @returns 배경이미지랑 텍스트 뱉어줌
 */
export default function SubBG (props) {
  return (          
    <>
      <StyledBackground bg={props.bg}>
        <StyledTitle>{props.title}</StyledTitle>
      </StyledBackground>
    </>

  )
}
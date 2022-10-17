import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import HeaderPlaceholder from "../components/HeaderPlaceholder";
import { Link, useNavigate } from "react-router-dom";


export default function LogIn () {
  const navigate = useNavigate();

  return(
    <>
    <HeaderPlaceholder></HeaderPlaceholder>
    <div className="login">
    <Container>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicId">
      <Form.Label>ID</Form.Label>
      <Form.Control type="id" placeholder="아이디" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="비밀번호" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="로그인 정보 기억하기" />
      <Link to = {'/signup'}>회원가입</Link>
    </Form.Group>
    <Button variant="danger" type="submit">
      로그인
    </Button>
    <Button variant="primary" onClick={()=>{navigate(process.env.PUBLIC_URL + '/signup')}}>
      회원가입
    </Button>
  </Form>
  </Container>
  </div>
  </>
  )
}
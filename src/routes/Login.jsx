import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function LogIn () {
  return(
    <div className="login">
    <Container xs={true}>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>ID</Form.Label>
      <Form.Control type="email" placeholder="아이디" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="비밀번호" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="로그인 정보 기억하기" />
    </Form.Group>
    <Button variant="danger" type="submit">
      로그인
    </Button>
  </Form>
  </Container>
  </div>
  )
}
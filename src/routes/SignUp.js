import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import HeaderPlaceholder from "../components/HeaderPlaceholder";
import "react-phone-number-input/style.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [address, setAddress] = useState("");
  const [verify, setVerify] = useState("");
  const user = [email, password, phone, passwordCheck, address, verify];

  return (
    <>
      <HeaderPlaceholder />
      <Container fluid={"lg"} className="mt-5 mb-5">
        <h1>회원가입</h1>
        <form
          action="/signup"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(user);
          }}
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            className="mb-3"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            className="mb-3"
            type="password"
            name="password"
            placeholder="비밀번호"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            className="mb-3"
            type="password"
            name="password-check"
            required
            placeholder="비밀번호 확인"
            value={passwordCheck}
            onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
          />
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            className="mb-3"
            type="tel"
            name="phone"
            placeholder="-없이 입력"
            pattern="[0-9]{3}[0-9]{4}[0-9]{4}"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <Form.Label>인증번호</Form.Label>
          <Form.Control
            className="mb-3"
            type="number"
            placeholder="인증번호"
            pattern="[0-9]{6}"
            value={verify}
            onChange={(e) => {
              setVerify(e.target.value);
            }}
          />
          <Form.Label>주소</Form.Label>
          <Form.Control
            className="mb-3"
            type="address"
            name="address"
            placeholder="배송을 위한 주소 입력"
            required
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <Button type="submit">회원가입</Button>
        </form>
      </Container>
    </>
  );
};

export default SignUp;

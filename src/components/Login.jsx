import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const LoginBox = styled.div`
  padding: 30px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ id: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (form.id && form.password) {
      navigate("/dashboard");
    }
  };

  return (
    <Container>
      <LoginBox>
        <h2>로그인 페이지</h2>
        <Input name="id" placeholder="아이디" onChange={handleChange} />
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={handleChange}
        />
        <Button onClick={handleLogin}>로그인</Button>
      </LoginBox>
    </Container>
  );
};

export default LoginPage;

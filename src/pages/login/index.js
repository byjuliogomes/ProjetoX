import React from "react";
import { Link } from "react-router-dom";
import H2 from "../../components/H2";
import Input from "../../components/Input";
import BtnLarger from "../../components/BtnLarger";
import Logo from "../../components/Logo";
import Fotter from "../../components/Footer";
import styled from "styled-components";
import Footer from "../../components/Footer";

const Illustration = styled.img`
  width: 100%;
  height: auto;
  margin-top: -2.5rem;

  @media(min-width: 800px) {
  margin: 1.5rem;
  width: 80%;
  }
`;

const ContainerGeral = styled.div`
  background-color: var(--dodger-blue);
  height: 100%;
  padding: 1.5rem 12% 0px 12%;
  
  @media(min-width: 800px) {
  display: flex;
  }
`;
const ContainerBtn = styled.div`
  margin-top: 1.5rem;
`;

const ContainerLogin = styled.div`
  margin-top: 1.5625rem;
`;

const ContainerLeft = styled.div`
  @media(min-width: 800px) {
    width: 70%;
  }
`;

const ContainerRight = styled.div`
 @media(min-width: 800px) {
    width: 30%
    margin-left: 1.5rem;
    display: flex;
    justify-content: center;
  align-items: center;
  }
`;

const Login = ({ history }) => {
  return (
    <>
      <ContainerGeral>
        <ContainerLeft>
          <Logo login={false}></Logo>
          <ContainerLogin>
            <H2>Faça Login</H2>
            <Input type="text" placeholder="email@email.com">
              E-mail
            </Input>
            <Input type="password" placeholder="*********">
              Senha
            </Input>
          </ContainerLogin>
          <ContainerBtn>
            <Link to="/" style={{ textDecoration: "none" }}>
              <BtnLarger on={true} size={"larger"}>
                ENTRAR
              </BtnLarger>
            </Link>
            <Link to="/inscrever" style={{ textDecoration: "none" }}>
              <BtnLarger on={false} size={"larger"}>
                INSCREVER
              </BtnLarger>
            </Link>
          </ContainerBtn>
        </ContainerLeft>
        <ContainerRight>
          <Illustration src="https://i.ibb.co/nnns9PY/illustrator.png"></Illustration>
        </ContainerRight>
      </ContainerGeral>
      <Footer></Footer>

    </>
  );
};

export default Login;

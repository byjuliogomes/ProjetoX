import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import { BtnNovoDeck } from "../BtnNovoDeck";

const BackHeader = styled.div`
  width: 100%;
  height: 146px;
  background-color: var(--dodger-blue);

  @media(min-width: 800px){
    height: 182px;
  }
`;

const ContainerdoHeader = styled.div`
padding: 24px  24px;
  height: 39.85px;
  top: 23px;
  display: flex;
  justify-content: space-between;
   @media(min-width: 800px){
    padding: 24px 12%;
  }
`;

const Btns = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAArHbV6gqS70hTQBiPnvI-mRMZw85ItexDw&usqp=CAU") no-repeat;
  background-size: cover;
  margin-left: 24px;

   @media(min-width: 800px){
     width: 52px;
      height: 52px;
     margin-left: 42px;
    
  }
`;


export default class Header extends React.Component {
  render() {
    return (
      <>
        <BackHeader>
          <ContainerdoHeader>
            <Logo></Logo>
            <Btns>
              <BtnNovoDeck></BtnNovoDeck>
              <Profile href="http://google.com"></Profile>
            </Btns>
          </ContainerdoHeader>
        </BackHeader>
      </>
    );
  }
}

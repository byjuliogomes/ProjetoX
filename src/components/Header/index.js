import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import { BtnNovoDeck } from "../BtnNovoDeck";

const BackHeader = styled.div`
  width: 100%;
  height: 146px;
  background-color: var(--dodger-blue);
`;

const ContainerdoHeader = styled.div`
padding: 24px  24px;
  height: 39.85px;
  top: 23px;
  display: flex;
  justify-content: space-between;
`;

export default class Header extends React.Component {
  render() {
    return (
      <>
        <BackHeader>
          <ContainerdoHeader>
            <Logo></Logo>
            <BtnNovoDeck></BtnNovoDeck>
          </ContainerdoHeader>
        </BackHeader>
      </>
    );
  }
}

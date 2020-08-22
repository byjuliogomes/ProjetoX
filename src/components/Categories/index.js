import React from "react";
import styled from "styled-components";
import BtnCategories from "../BtnCategories";

const ContainerCategories = styled.div`
  margin-top: 18px;
  margin-left: 23px;
  width: 100%;
  right: 0;
  top: 23px;
`;

const ContainerBtnCategories = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 0px;
}
`;

const Title = styled.h3`
  font-size: 16pt;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--dark-indigo);
`;

export default class Categories extends React.Component {
  render() {
    return (
      <>
        <ContainerCategories>
          <Title>Categorias</Title>
          <ContainerBtnCategories>
            <BtnCategories></BtnCategories>
            <BtnCategories></BtnCategories>
            <BtnCategories></BtnCategories>
            <BtnCategories></BtnCategories>
            <BtnCategories></BtnCategories>
            <BtnCategories></BtnCategories>
            <BtnCategories></BtnCategories>
            <BtnCategories></BtnCategories>
          </ContainerBtnCategories>
        </ContainerCategories>
      </>
    );
  }
}

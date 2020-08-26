import React from "react";
import styled from "styled-components";
import BtnCategories from "../BtnCategories";

const ContainerCategories = styled.div`
  margin-top: 18px;
  margin-left: 23px;
  width: 100VW;
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
            <BtnCategories name="Administração" icon="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/office-building_1f3e2.png"></BtnCategories>
            <BtnCategories name="Artes" icon="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/artist-palette_1f3a8.png"></BtnCategories>
            <BtnCategories name="Biologia"></BtnCategories>
            <BtnCategories name="Concursos"></BtnCategories>
            <BtnCategories name="Contabilidade"></BtnCategories>
            <BtnCategories name="Cultura Pop"></BtnCategories>
            <BtnCategories name="Direito"></BtnCategories>
            <BtnCategories name="Ed. Física"></BtnCategories>
          </ContainerBtnCategories>
        </ContainerCategories>
      </>
    );
  }
}

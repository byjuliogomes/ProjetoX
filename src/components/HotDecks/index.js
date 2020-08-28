import React from "react";
import styled from "styled-components";
import { BtnDeck } from "../BtnDeck";

const ContainerHotDecks = styled.div`
  margin-bottom: 24px;

  @media(min-width: 800px){
    margin-bottom: 12px;
   }
`;

const ContainerTitulos = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  top: 23px;
  display: flex;
  align-items: center;
  justify-content: space-between;

   @media(min-width: 800px){
    margin-left: 12%;
    margin-right: 12%;
    margin-top: 12px
   }
`;

const Title = styled.h3`
  font-size: 16pt;
  font-weight: 600;
  color: var(--dark-indigo);
`;

const LinkVerMais = styled.a`
  font-size: 10pt;
  font-weight: 400;
  color: var(--dodger-blue);
  cursor: pointer;
`;

const ContainerBtnDecks = styled.div`
    height: 360px;
    margin-left: 24px;
  margin-right: 24px;
  display: flex;
  flex-wrap: wrap;

  @media(min-width: 800px){
    height: 180px;
    margin-left: 12%;
    margin-right: 12%;
    flex-wrap: nowrap;
  }
`;

const ContainerBtnDeck = styled.div`
  margin-right: 18px;
  margin-bottom: 28px;

  @media(min-width: 800px){
    margin-right: 36px;
    
  }
`;

const NameDeck = styled.div`
  text-align: center;  
  font-size: 10pt;
  margin-top: 18px;

  @media(min-width: 800px){
    font-size: 10pt;
    
  }
`;

export default class HotDecks extends React.Component {
  render() {
    return (
      <>
        <ContainerHotDecks>
          <ContainerTitulos>
            <Title>Decks em alta</Title>
            <LinkVerMais>Ver mais</LinkVerMais>
          </ContainerTitulos>
          <ContainerBtnDecks>
            <ContainerBtnDeck>
              <BtnDeck></BtnDeck>
              <NameDeck>Países da África</NameDeck>
            </ContainerBtnDeck>
            <ContainerBtnDeck>
              <BtnDeck></BtnDeck>
              <NameDeck>Países da África</NameDeck>
            </ContainerBtnDeck>
            <ContainerBtnDeck>
              <BtnDeck></BtnDeck>
              <NameDeck>Países da África</NameDeck>
            </ContainerBtnDeck>
            <ContainerBtnDeck>
              <BtnDeck></BtnDeck>
              <NameDeck>Países da África</NameDeck>
            </ContainerBtnDeck>
            <ContainerBtnDeck>
              <BtnDeck></BtnDeck>
              <NameDeck>Países da África</NameDeck>
            </ContainerBtnDeck>
            <ContainerBtnDeck>
              <BtnDeck></BtnDeck>
              <NameDeck>Países da África</NameDeck>
            </ContainerBtnDeck>
          </ContainerBtnDecks>
        </ContainerHotDecks>
      </>
    );
  }
}

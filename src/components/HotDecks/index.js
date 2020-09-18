import React from "react";
import styled from "styled-components";
import { BtnDeck } from "../BtnDeck";

const ContainerHotDecks = styled.div`
  margin-bottom: 2.625rem;

  @media (min-width: 800px) {
    margin-bottom: 2.625rem;
  }
`;

const ContainerTitulos = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  top: 1.4375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 800px) {
    margin-left: 12%;
    margin-right: 12%;
    margin-top: 0.75rem;
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

const Grid = styled.div`
  height: 90%;
  display: grid;
  grid-gap: 1.5625rem 0.75rem;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(7.0625rem, 1fr));
  margin: 0 5% 0 5%;

  //   height: 360px;
  //   margin-left: 1.5rem;
  // margin-right: 1.5rem;
  // display: flex;
  // flex-wrap: wrap;

  @media (min-width: 800px) {
    height: 100%;
    display: grid;
    grid-gap: 1.5625rem 1.125rem;
    grid-auto-rows: auto;
    grid-template-columns: repeat(auto-fit, minmax(6.875rem, 1fr));
    margin: 0 12% 0 12%;
  }
`;

const ContainerBtnDeckLeft = styled.div`
  @media (min-width: 800px) {
  }
`;

const ContainerBtnDeckRight = styled.div`
  @media (min-width: 800px) {
  }
`;

const NameDeck = styled.div`
  text-align: center;
  font-size: 10pt;
  margin-top: 1.125rem;
  max-width: 7.5rem;

  @media (min-width: 800px) {
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
          <Grid>
            <ContainerBtnDeckLeft>
              <BtnDeck icon="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/office-building_1f3e2.png"></BtnDeck>
              <NameDeck>Países da África</NameDeck>
            </ContainerBtnDeckLeft>
            <ContainerBtnDeckRight>
              <BtnDeck></BtnDeck>
              <NameDeck>Fim do Império Romano</NameDeck>
            </ContainerBtnDeckRight>
            <ContainerBtnDeckLeft>
              <BtnDeck></BtnDeck>
              <NameDeck>Países da África</NameDeck>
            </ContainerBtnDeckLeft>
            <ContainerBtnDeckRight>
              <BtnDeck></BtnDeck>
              <NameDeck>Países da África</NameDeck>
            </ContainerBtnDeckRight>
            <ContainerBtnDeckLeft>
              <BtnDeck></BtnDeck>
              <NameDeck>Países da África</NameDeck>
            </ContainerBtnDeckLeft>
            <ContainerBtnDeckRight>
              <BtnDeck></BtnDeck>
              <NameDeck>Países da África</NameDeck>
            </ContainerBtnDeckRight>
          </Grid>
        </ContainerHotDecks>
      </>
    );
  }
}

import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import PageTransition from 'react-router-page-transition';




const BtnDeckFront = styled.div`
  position: absolute;
  width: 92px;
  height: 92px;
  background: url("https://marquesfernandes.com/wp-content/uploads/2020/01/1555172.jpg");
  background-size: cover;
  border-radius: 10px;
  z-index: 2;

  @media(min-width: 800px){
    width: 86px;
    height: 86px;
  }
`;

const BtnDeckBack = styled.div`
  width: 92px;
  height: 92px;
  transform: rotate(12deg);
  background-color: var(--pastel-purple);
  border-radius: 10px;
  z-index: -1;
  padding-left: 0px;
  margin-top: 8px;
  margin-left: 14px;

  @media(min-width: 800px){
    width: 86px;
    height: 86px;
    margin-top: 12px;
    margin-left: 12px;
  }

`;

const ContainerFront = styled.div`
display: flex;
justify-content: center;
align-content: center;
`

const Btn = styled.a`
  width: 112px;
  height: 39.85px;
  cursor: pointer;
`;

const Title = styled.h3`
  font-size: 11pt;
  margin-top: 28px;

`;

export function BtnDeck() {

    return (
        <>
            <Btn>
                <Link to="/novodeck">
                <ContainerFront>
                    <BtnDeckFront></BtnDeckFront>
                </ContainerFront>
                <BtnDeckBack></BtnDeckBack>
                </Link>
            </Btn>
        </>
    );
};

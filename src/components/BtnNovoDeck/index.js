import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import PageTransition from 'react-router-page-transition';

const PlusVertical = styled.div`
position: absolute;
height: 17.43px;
border: 1.5px solid #A06AF4;
background-color: #A06AF4;
z-index:3;
border-radius: 20%;
margin-top: 5px;
`

const PlusHorizontal = styled.div`
position: absolute;
height: 17.43px;
border: 1.5px solid #A06AF4;
background-color: #A06AF4;
z-index:3;
border-radius: 20%;
margin-top: 5px;
transform: rotate(90deg)
`

const BtnNovoDeckFront = styled.div`
  position: absolute;
  width: 34.08px;
  height: 34.08px;
  background-color: var(--pale-grey);
  border-radius: 5.35543px;
  z-index: 2;
`;

const BtnNovoDeckBack = styled.div`
  width: 34.08px;
  height: 34.08px;
  transform: rotate(12deg);
  background-color: var(--pastel-purple);
  border-radius: 5.35543px;
  z-index: -1;
  padding-left: 0px;
  margin-top: 4px;
  margin-left: 5px;
`;

const ContainerFront = styled.div`
display: flex;
justify-content: center;
align-content: center;
`

const Btn = styled.a`
  width: 39.85px;
  height: 39.85px;
  cursor: pointer;
`;

export function BtnNovoDeck() {

    return (
        <>
            <Btn>
                <Link to="/novodeck">
                <ContainerFront>
                    <PlusHorizontal></PlusHorizontal>
                    <PlusVertical></PlusVertical>
                    <BtnNovoDeckFront></BtnNovoDeckFront>
                </ContainerFront>
                <BtnNovoDeckBack></BtnNovoDeckBack>
                </Link>
            </Btn>
        </>
    );
};

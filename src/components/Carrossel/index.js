import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'


const CarouselWrapped = styled.div`
height: 112px;
width: 100%;
margin-top: -60px;
margin-botton: 17px;
background-color: pink;
`
const Slide1 = styled.div`
width: 254px;
height: 112px;
margin-right: 10.3%;
margin-left: 10.3%;
background-color: yellow;
`


export function Carousel() {

    return (
        <>
            <CarouselWrapped>
                 <Slide1>

                </Slide1> 
            </CarouselWrapped>
        </>
    );
};

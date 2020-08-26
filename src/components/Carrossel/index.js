import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'


const CarouselWrapped = styled.div`
height: 112px;
width: 100%;
margin-top: -60px;
margin-botton: 17px;
display: flex;

`
const Slide1 = styled.div`
width: 80%;
height: 112px;
background: url("https://i.pinimg.com/originals/ab/7e/22/ab7e22e47ce56b58d0805ee967350124.png") no-repeat;
background-size: cover; 
box-shadow: 0px 11px 5px -11px rgba(0, 0, 0, 0.25);
border-radius: 9.22179px;
z-index: 2;
`

const Slide2 = styled.div`
width: 50%;
height: 84px;
background: url("https://i.pinimg.com/originals/ab/7e/22/ab7e22e47ce56b58d0805ee967350124.png") no-repeat;
background-size: cover; 
box-shadow: 0px 11px 5px -11px rgba(0, 0, 0, 0.25);
border-radius:  9.22179px 0 0 9.22179px ;
z-index: 1;

`
const Slide3 = styled.div`
width: 50%;
height: 84px;
background: url("https://i.pinimg.com/originals/ab/7e/22/ab7e22e47ce56b58d0805ee967350124.png") no-repeat;
background-size: cover; 
box-shadow: 0px 11px 5px -11px rgba(0, 0, 0, 0.25);
border-radius: 9.22179px;
z-index: 1;
`
const ContainerSlide1 = styled.div`

`

export function Carousel() {

    return (
        <>
            <CarouselWrapped>
                <Slide2>

                </Slide2>
                <ContainerSlide1>
                    <Slide1>

                    </Slide1>
                </ContainerSlide1>
                <Slide3>

                </Slide3>
            </CarouselWrapped>
        </>
    );
};

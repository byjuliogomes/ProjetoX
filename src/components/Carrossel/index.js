import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'


const CarouselWrapped = styled.div`
height: 112px;
width: 100%;
margin-top: -60px;
margin-botton: 17px;

`
const Slide1 = styled.div`
width: 80%;
height: 112px;
margin-right: 10%;
margin-left: 10%;
background: url("https://i.pinimg.com/originals/ab/7e/22/ab7e22e47ce56b58d0805ee967350124.png") no-repeat;
background-size: cover; 
box-shadow: 0px 11px 5px -11px rgba(0, 0, 0, 0.25);
border-radius: 9.22179px;

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

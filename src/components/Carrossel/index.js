import React from "react";
import styled from "styled-components";


const CarouselWrapped = styled.div`
position: relative;
height: 112px;
width: 100%;
margin-top: -60px;
margin-botton: 32px;
display: flex;
align-items: center;

@media(min-width: 800px) {
    height: 112px;
    margin-top: -60px;
    margin-right: 12%;
    margin-left: 12%;
    margin-bottom: 42px;
  }
`
const Slide1 = styled.div`
position: absolute;
width: 80%;
height: 112px;
margin-left: 10%;
margin-right: 10%;
background: url("https://i.pinimg.com/originals/ab/7e/22/ab7e22e47ce56b58d0805ee967350124.png") no-repeat center;
background-size: cover; 
box-shadow: 0px 11px 5px -11px rgba(0, 0, 0, 0.25);
border-radius: 9.22179px;
z-index:2;

@media(min-width: 800px) {
    height: 172px;
    width: 52%;
    margin-bottom: 32px;
  }
`

const Slide2 = styled.div`
position: relative;
width: 50%;
height: 86px;
background: linear-gradient(270deg, #3384FF 71.95%, rgba(51, 132, 255, 0.31) 100%), url("https://miro.medium.com/max/2560/1*COxSlGfyw9bL4S2l1_ARRA.png") no-repeat;
background-size: cover; 
box-shadow: 0px 11px 5px -11px rgba(0, 0, 0, 0.25);
border-radius:  9.22179px 0 0 9.22179px ;
z-index: 1;
@media(min-width: 800px) {
    height: 132px;
    width: 38%;
  }
`
const Slide3 = styled.div`
position: relative;
width: 50%;
height: 86px;
background: linear-gradient(-270deg, #3384FF 71.95%, rgba(51, 132, 255, 0.31) 100%), url("https://www.freevector.com/uploads/vector/preview/26759/cabin-01.jpg") no-repeat;
background-size: cover; 
box-shadow: 0px 11px 5px -11px rgba(0, 0, 0, 0.25);
border-radius: 9.22179px;
z-index: 1;
@media(min-width: 800px) {
    height: 132px;
    width: 38%;
  }
`


export function Carousel() {

    return (
        <>
            <CarouselWrapped>
                <Slide2>

                </Slide2>
                <Slide1>

                </Slide1>
                <Slide3>

                </Slide3>
            </CarouselWrapped>
        </>
    );
};

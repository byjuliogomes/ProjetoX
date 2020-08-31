import React from "react";
import styled from "styled-components";


const CarouselWrapped = styled.div`
position: relative;
height: 7rem;
width: 100%;
margin-top: -3.75rem;
margin-botton: 2rem;
display: flex;
align-items: center;

@media(min-width: 800px) {
    height: 7rem;
    margin-top: -3.75rem;
    margin-right: 12%;
    margin-left: 12%;
    margin-bottom: 2.625rem;
  }
`
const Slide1 = styled.div`
position: absolute;
width: 80%;
height: 7rem;
margin-left: 10%;
margin-right: 10%;
background: url("https://i.pinimg.com/originals/ab/7e/22/ab7e22e47ce56b58d0805ee967350124.png") no-repeat center;
background-size: cover; 
box-shadow: 0px 0.6875rem 0.3125rem -0.6875rem rgba(0, 0, 0, 0.25);
border-radius: 0.576361875rem;
z-index:2;

@media(min-width: 800px) {
    height: 10.75rem;
    width: 52%;
    margin-bottom: 2rem;
  }
`

const Slide2 = styled.div`
position: relative;
width: 50%;
height: 5.375rem;
background: linear-gradient(270deg, #3384FF 71.95%, rgba(51, 132, 255, 0.31) 100%), url("https://miro.medium.com/max/2560/1*COxSlGfyw9bL4S2l1_ARRA.png") no-repeat;
background-size: cover; 
box-shadow: 0px 0.6875rem 0.3125rem -0.6875rem rgba(0, 0, 0, 0.25);
border-radius:  0.576361875rem 0 0 0.576361875rem ;
z-index: 1;
@media(min-width: 800px) {
    height: 8.25rem;
    width: 38%;
  }
`
const Slide3 = styled.div`
position: relative;
width: 50%;
height: 5.375rem;
background: linear-gradient(-270deg, #3384FF 71.95%, rgba(51, 132, 255, 0.31) 100%), url("https://www.freevector.com/uploads/vector/preview/26759/cabin-01.jpg") no-repeat;
background-size: cover; 
box-shadow: 0px 0.6875rem 0.3125rem -0.6875rem rgba(0, 0, 0, 0.25);
border-radius: 0.576361875rem;
z-index: 1;
@media(min-width: 800px) {
    height: 8.25rem;
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

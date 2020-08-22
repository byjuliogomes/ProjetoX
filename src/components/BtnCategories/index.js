import React from "react";
import styled from "styled-components";

const ContainerBtnCategories = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 6px;
`;

const BackCategories = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`;

const CircleCategories = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffdddd;
  margin-bottom: 8px;
  border-radius: 50%;
  display:flex;
    justify-content: center;
    align-items: center;
`;


const IconCategories = styled.img`
  background: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/office-building_1f3e2.png) no-repeat;
  width:30px;
  height:30px;
  background-size: cover;
`;
const NameCategories = styled.div`
  font-size: 9pt;
`;

export default class BtnCategories extends React.Component {
  render() {
    return (
      <>
        <ContainerBtnCategories>
          <BackCategories>
            <CircleCategories>
                        <IconCategories></IconCategories>
            </CircleCategories>
          </BackCategories>
          <NameCategories>Administração</NameCategories>
        </ContainerBtnCategories>
      </>
    );
  }
}

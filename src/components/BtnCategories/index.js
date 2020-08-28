import React from "react";
import styled from "styled-components";


const ContainerBtnCategories = styled.div`
  width: 80px;
  height: 84px;
  margin-right: 20px;
  text-align: center;
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
  width:30px;
  height:30px;
  background-size: cover;
`;
const NameCategories = styled.div`
  font-size: 9pt;
`;

export default class BtnCategories extends React.Component {
  constructor(props){
super(props)


  }
  
  render() {
    return (
      <>
        <ContainerBtnCategories>
          <BackCategories>
            <CircleCategories>
              <IconCategories src={this.props.icon}></IconCategories>
            </CircleCategories>
          </BackCategories>
          <NameCategories>{this.props.name}</NameCategories>
        </ContainerBtnCategories>
      </>
    );
  }
}

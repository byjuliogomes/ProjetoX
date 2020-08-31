import React from "react";
import styled from "styled-components";


const ContainerBtnCategories = styled.div`
  width: 5rem;
  height: 5.25rem;
  margin-right: 1.25rem;
  text-align: center;
`;

const BackCategories = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`;

const CircleCategories = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  background-color: #ffdddd;
  margin-bottom: 0.5rem;
  border-radius: 50%;
  display:flex;
    justify-content: center;
    align-items: center;
`;


const IconCategories = styled.img`
  width:1.875rem;
  height:1.875rem;
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

import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-size: 12pt;
  font-weight: 600;
  color: var(--pale-grey);
  display: block;
`;
const Containerbox = styled.input`
  width: 100%;
  height: 3rem;
  background-color: #55b0f8;
  border-radius: 0.25rem;
  border-style: hidden;
  display: block;
  color: var(--dark-indigo);
  padding: 0 0 0 0.75rem;

  ::placeholder{
    color: var(--pale-grey);
  }

  :focus{
    border: var(--pastel-purple) 0.125rem solid;
  }
`;


const ContainerInput = styled.div`
  margin: 0.75rem;
`;

const Input = (props,{placeholder, type}) => {
  return (
    <>
      <ContainerInput>
        <Label>
          {props.children}
                  <Containerbox type={props.type} placeholder={props.placeholder}></Containerbox>
        </Label>
      </ContainerInput>
    </>
  );
};

export default Input;

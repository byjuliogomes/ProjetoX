import React from "react";
import styled from "styled-components";

const ContainerBtn = styled.div`
  
`

const BtnBack = styled.div`
  width: 7.75rem;
  height: 3.75rem;
  background-color: ${props => (props.on ? "#925aea" : "#3094E2")};
  border-radius: 1.2125rem;
`;
const BtnFront = styled.div`
  position: relative;
  width: 7.75rem;
  height: 3.31rem;
  background: ${props => (props.on ? "#A06AF4" : "#46A4EE")};
  border-radius: 1.2125rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.span`
  position: relative;
  font-size: 14pt;
  font-weight: 600;
  color: var(--pale-grey);
  text-align: center;
  
`;

const Btn = (props) => {
  return (
    <>
      <ContainerBtn>
              <BtnBack on={props.on}>
                  <BtnFront on={props.on}>
            <Text>{props.children}</Text>
          </BtnFront>
        </BtnBack>
      </ContainerBtn>
    </>
  );
};

export default Btn;

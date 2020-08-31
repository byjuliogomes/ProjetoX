import React from "react";
import styled from "styled-components";



const ContainerTitulo = styled.div`
  margin-right: 1.5rem;
  top: 1.4375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

   @media(min-width: 800px){
    margin-right: 12%;
    margin-top: 0.75rem;
   }
`;

const Text = styled.h2`
  font-size: 24pt;
  font-weight: 600;
  color: var(--pale-grey);
`


const H2 = (props) => {
        return (
            <>
                <ContainerTitulo>
                <Text>{props.children}</Text>
                </ContainerTitulo>
            </>
        );
    }


export default H2;
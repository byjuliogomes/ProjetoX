import React from 'react'
import styled from 'styled-components'

const LogoStyled = styled.img`
background: url("././assets/logo_mobile.svg") no-repeat;
width: ${props => (props.login ? "7.5rem" : "12.5rem")};
height: auto;

@media(min-width: 800px) {
    width: ${props => (props.login ? "7.5rem" : "12.5rem")};
    height: auto;
  }
`;

 const Logo = (props) => {
    return (
        <div>
            <LogoStyled src="https://svgshare.com/i/Nvy.svg" class="Logo-mobile" login={props.login} />
        </div>
    )
}

export default Logo
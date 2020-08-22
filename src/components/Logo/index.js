import React from 'react'
import styled from 'styled-components'

const LogoStyled = styled.img`
background: url("././assets/logo_mobile.svg") no-repeat;

@media(min-width: 800px) {
    width: 190px;
    height: auto;
  }
`;

export default function Logo () {
    return (
        <div>
            <LogoStyled src="https://svgshare.com/i/Nvy.svg" class="Logo-mobile" />
        </div>
    )
}

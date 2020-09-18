import styled from 'styled-components';

export const LogoStyled = styled.img`
background: url("././assets/logo_mobile.svg") no-repeat;
width: ${props => (props.login ? "7.5rem" : "12.5rem")};
height: auto;

@media(min-width: 800px) {
    width: ${props => (props.login ? "7.5rem" : "12.5rem")};
    height: auto;
  }
`;
import React from 'react';
import * as S from "./style";


 const Logo = (props) => {
    return (
        <div>
            <S.LogoStyled src="https://svgshare.com/i/Nvy.svg" class="Logo-mobile" login={props.login} />
        </div>
    )
}

export default Logo;
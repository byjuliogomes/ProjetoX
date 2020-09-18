import React from "react";
import { Link } from "react-router-dom";
import PageTransition from "react-router-page-transition";
import * as S from "./style";


export function BtnDeck(props) {
  return (
    <>
      <S.Btn>
        <Link to="/novodeck">
          
          <S.ContainerFront>
            <S.BtnDeckFront><S.Circle><S.IconCategories src={props.icon}></S.IconCategories></S.Circle></S.BtnDeckFront>
          </S.ContainerFront>
          <S.BtnDeckBack></S.BtnDeckBack>
        </Link>
      </S.Btn>
    </>
  );
}

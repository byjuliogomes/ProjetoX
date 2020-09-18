import React from "react";
import { Link } from 'react-router-dom'
import PageTransition from 'react-router-page-transition';
import * as S from "./style";

export function BtnNovoDeck() {

    return (
        <>
            <S.Btn>
                <Link to="/novodeck">
                <S.ContainerFront>
                    <S.PlusHorizontal></S.PlusHorizontal>
                    <S.PlusVertical></S.PlusVertical>
                    <S.BtnNovoDeckFront></S.BtnNovoDeckFront>
                </S.ContainerFront>
                <S.BtnNovoDeckBack></S.BtnNovoDeckBack>
                </Link>
            </S.Btn>
        </>
    );
};

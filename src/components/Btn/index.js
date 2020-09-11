import React from "react";
import * as S from "./style";



const Btn = (props) => {
  return (
    <>
      <S.ContainerBtn>
        <S.BtnBack on={props.on}>
          <S.BtnFront on={props.on}>
            <S.Text>{props.children}</S.Text>
          </S.BtnFront>
        </S.BtnBack>
      </S.ContainerBtn>
    </>
  );
};

export default Btn;

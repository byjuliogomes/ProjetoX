import React from "react";
import * as S from "./style";


export default class BtnCategories extends React.Component {
  constructor(props){
super(props)


  }
  
  render() {
    return (
      <>
        <S.ContainerBtnCategories>
          <S.BackCategories>
            <S.CircleCategories>
              <S.IconCategories src={this.props.icon}></S.IconCategories>
            </S.CircleCategories>
          </S.BackCategories>
          <S.NameCategories>{this.props.name}</S.NameCategories>
        </S.ContainerBtnCategories>
      </>
    );
  }
}

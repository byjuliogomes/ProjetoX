import styled from "styled-components";


export const PlusVertical = styled.div`
position: absolute;
height: 1.089375rem;
border: 0.09375rem solid #A06AF4;
background-color: #A06AF4;
z-index:3;
border-radius: 20%;
margin-top: 0.3125rem;
`

export const PlusHorizontal = styled.div`
position: absolute;
height: 1.089375rem;
border: 0.09375rem solid #A06AF4;
background-color: #A06AF4;
z-index:3;
border-radius: 20%;
margin-top: 0.3125rem;
transform: rotate(90deg);
`

export const BtnNovoDeckFront = styled.div`
  position: absolute;
  width: 2.13rem;
  height: 2.13rem;
  background-color: var(--pale-grey);
  border-radius: 0.334714375rem;
  z-index: 2;
`;

export const BtnNovoDeckBack = styled.div`
  width: 2.13rem;
  height: 2.13rem;
  transform: rotate(12deg);
  background-color: var(--pastel-purple);
  border-radius: 0.334714375rem;
  z-index: -1;
  padding-left: 0px;
  margin-top: 0.25rem;
  margin-left: 0.3125rem;
`;

export const ContainerFront = styled.div`
display: flex;
justify-content: center;
align-content: center;
`

export const Btn = styled.a`
  width: 2.490625rem;
  height: 2.490625rem;
  cursor: pointer;
`;
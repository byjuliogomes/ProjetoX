import styled from "styled-components";

export const BtnDeckFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 5.75rem;
  height: 5.75rem;
  background: url("https://marquesfernandes.com/wp-content/uploads/2020/01/1555172.jpg");
  background-size: cover;
  border-radius: 0.625rem;
  z-index: 2;
  margin: 0 0.75rem 0 0.75rem;

  @media (min-width: 800px) {
    width: 5.375rem;
    height: 5.375rem;
  }
`;

export const BtnDeckBack = styled.div`
  width: 5.75rem;
  height: 5.75rem;
  transform: rotate(12deg);
  background-color: var(--pastel-purple);
  border-radius: 0.625rem;
  z-index: -1;
  padding-left: 0px;
  margin-top: 0.5rem;
  margin-left: 14%;
  margin-right: 14%;

  @media (min-width: 800px) {
    width: 5.375rem;
    height: 5.375rem;
    margin-top: 0.75rem;
    transform: rotate(12deg);
  }
`;

export const ContainerFront = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const Btn = styled.a`
  position: relative;
  width: 7rem;
  height: 2.490625rem;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: 11pt;
  margin-top: 1.75rem;
`;

export const Circle = styled.div`
  background-color: #E6FFDD;
  width: 1.5rem;
  height: 1.5rem;
  color: white;
  border-radius: 50%;
  font-size: 0.625rem;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index:2;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const IconCategories = styled.img`
  width:1rem;
  height:1rem;
  background-size: cover;
`;
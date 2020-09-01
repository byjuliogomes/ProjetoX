import React from "react";
import styled from "styled-components";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const BackFooter = styled.div`
    display: none;

    @media(min-width: 800px) {
    display: block;
    background-color: var(--dodger-green-light);
    width: 100VW;
    height: 5.5rem;
    }
`
const ContainerFooter = styled.div`
    display: none;

    @media(min-width: 800px) {
    display: flex;
    margin: 0 12% 0 12%;
    height: 5.5rem;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    }
`

const RightsReserved = styled.div`

    @media(min-width: 800px) {
    font-size: 10pt;
    color: var(--steel);
    align-items: center;
    }
`;

const Icons = styled.div`
    display: none;

    @media(min-width: 800px) {
        display: flex;
        justify-content: flex-end;
    }
`;

const FaceIcon = styled(FiFacebook)`
  color: var(--steel);
  width: 1rem;
  margin-right: 4px;

  :footer {
    color: var(--dodger-blue);
  }
`

const InstaIcon = styled(FiInstagram)`
  color: var(--steel);
  width: 1rem;
  margin-right: 4px;

  :footer {
    color: var(--dodger-blue);
  }
`

const TwiIcon = styled(FiTwitter)`
  color: var(--steel);
  width: 1rem;
  margin-right: 4px;

  :footer {
    color: var(--dodger-blue);
  }
`

const Footer = () => {
        return (
            <>
            <BackFooter>
                <ContainerFooter>
                        <RightsReserved>© 2020, All Rights Reserved, EBBI Entertainment</RightsReserved>
                        <Icons><FaceIcon /><InstaIcon /><TwiIcon /></Icons>
                </ContainerFooter>
            </BackFooter>
            </>
        );
    }

export default Footer
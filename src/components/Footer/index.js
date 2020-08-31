import React from "react";
import styled from "styled-components";

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
    }
`;


export default class Footer extends React.Component {
    render() {
        return (
            <>
            <BackFooter>
                <ContainerFooter>
                        <RightsReserved>© 2020, All Rights Reserved, EBBI Entertainment</RightsReserved>
                        <Icons></Icons>
                </ContainerFooter>
            </BackFooter>
            </>
        );
    }
}
import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import { BtnNovoDeck } from "../BtnNovoDeck";
import { Link } from "react-router-dom";
import { FiUser, FiLogOut } from "react-icons/fi";

const BackHeader = styled.div`
  width: 100%;
  height: 9.125rem;
  background-color: var(--dodger-blue);

  @media (min-width: 800px) {
    height: 182px;
  }
`;

const ContainerdoHeader = styled.div`
  padding: 1.5rem 1.5rem;
  height: 2.490625rem;
  top: 1.4375rem;
  display: flex;
  justify-content: space-between;
  @media (min-width: 800px) {
    padding: 1.5rem 12%;
  }
`;

const Btns = styled.div`
  display: ${(props) => (props.login ? "flex" : "none")};
  align-items: center;
`;

const Profile = styled.a`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAArHbV6gqS70hTQBiPnvI-mRMZw85ItexDw&usqp=CAU")
    no-repeat;
  background-size: cover;
  margin-left: 1.5rem;

  @media (min-width: 800px) {
    width: 3.25rem;
    height: 3.25rem;
    margin-left: 2.625rem;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 0.5rem 1rem 0px rgba(0, 0, 0, 0.2);
  z-index: 3;
  margin-top: 2.625rem;
  border-radius: 0.25rem;
  width: 6rem;

  ul {
    padding-left: 0px;
  }

  li {
    list-style-type: none;
    margin: 0.75rem;
    text-align: center;
    font-size: 12pt;
    display: flex;
    justify-content: center;
    
  }

  ul a {
    text-decoration: none;
    color: var(--dark-indigo);

    :footer {
    color: var(--dodger-blue);
  }
  }
`;

const Dropdown = styled.div`
  display: flex;

  &:hover ${DropdownContent} {
    display: block;
  }

  
  &:active ${DropdownContent} {
    display: block;
  }
`;

const UserIcon = styled(FiUser)`
  color: var(--dark-indigo);
  width: 1rem;
  margin-right: 4px;

  :footer {
    color: var(--dodger-blue);
  }
`

const LogoutIcon = styled(FiLogOut)`
  color: var(--dark-indigo);
  width: 1rem;
  margin-right: 4px;

  :footer {
    color: var(--dodger-blue);
  }
`

const Header = (props) => {
  return (
    <>
      <BackHeader>
        <ContainerdoHeader>
          <Logo login={true}></Logo>
          <Btns login={props.login}>
            <BtnNovoDeck></BtnNovoDeck>
            <Dropdown>
              <Profile></Profile>
              <DropdownContent>
                <ul class="dropdown">
                  <li>
                    <Link to="/perfil"><UserIcon />Perfil</Link>
                  </li>
                  <li>
                    <Link to="/login"><LogoutIcon />Sair</Link>
                  </li>
                </ul>
              </DropdownContent>
            </Dropdown>
          </Btns>
        </ContainerdoHeader>
      </BackHeader>
    </>
  );
};

export default Header;

import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import { menuState } from "../../../states/menu";

import hamburgermenu from "@images/hamburgermenu.svg";
import logo from "@images/logo.svg";
import { Link } from "react-router-dom";

const LeftSection = () => {
    const setIsOpenMenu = useSetRecoilState(menuState);

    const openMenu = () => {
        setIsOpenMenu((prev) => !prev);
    };

    return (
        <Wrap>
            <Button onClick={openMenu}>
                <Icon src={hamburgermenu} />
            </Button>
            <Logo to="/">
                <LogoIcon src={logo} />
                Metube
            </Logo>
        </Wrap>
    );
};

export default LeftSection;

const Wrap = styled.div`
    display: flex;
    gap: 20px;
`;

const Icon = styled.img`
    height: 24px;
`;

const LogoIcon = styled.img`
    height: 24px;
`;

const Logo = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    color: #000;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
`;

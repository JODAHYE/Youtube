import React from "react";
import styled from "styled-components";

import home from "@images/home.svg";
import compass from "@images/compass.svg";
import history from "@images/history.svg";
import play from "@images/play.svg";
import store from "@images/store.svg";
import youtubeShorts from "@images/youtubeShorts.svg";
import subscription from "@images/subscription.svg";
import clock from "@images/clock.svg";
import { Link } from "react-router-dom";

const OpenMenu = () => {
    return (
        <Wrap>
            <MenuSection>
                <MenuItem to="/">
                    <Icon src={home} />홈
                </MenuItem>
                <MenuItem to="/search">
                    <Icon src={compass} />
                    탐색
                </MenuItem>
                <MenuItem to="/">
                    <Icon src={youtubeShorts} />
                    Shors
                </MenuItem>
                <MenuItem to="/">
                    <Icon src={subscription} />
                    구독
                </MenuItem>
            </MenuSection>
            <MenuSection>
                <MenuItem to="/">
                    <Icon src={store} />
                    보관함
                </MenuItem>
                <MenuItem to="/">
                    <Icon src={history} />
                    시청기록
                </MenuItem>
                <MenuItem to="/">
                    <Icon src={play} />내 동영상
                </MenuItem>
                <MenuItem to="/">
                    <Icon src={clock} />
                    나중에 볼 동영상
                </MenuItem>
            </MenuSection>
        </Wrap>
    );
};

export default OpenMenu;

const Wrap = styled.div`
    width: 12%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 10px;

    z-index: 200;
    background: #fff;
`;

const MenuSection = styled.div`
    border-bottom: 1px solid ${(props) => props.theme.colors.mainGray};
`;

const MenuItem = styled(Link)`
    width: 100%;
    display: flex;
    gap: 20px;
    padding: 10px 20px;
    text-decoration: none;
    color: #000;
    &:hover {
        background: ${(props) => props.theme.colors.middleGray};
    }
`;

const Icon = styled.img`
    width: 16px;
`;

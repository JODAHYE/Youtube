import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { menuState } from "../../states/menu";
import styled from "styled-components";

import OpenMenu from "../common/menu/OpenMenu";
import LeftSection from "../common/nav/LeftSection";

import home from "@images/home.svg";
import compass from "@images/compass.svg";
import history from "@images/history.svg";
import play from "@images/play.svg";
import store from "@images/store.svg";
import youtubeShorts from "@images/youtubeShorts.svg";
import subscription from "@images/subscription.svg";
import clock from "@images/clock.svg";
import { Link } from "react-router-dom";

type StyledType = {
    isActive: boolean;
};

const SlideMenu = () => {
    const isOpenMenu = useRecoilValue(menuState);
    return (
        <Wrap isActive={isOpenMenu}>
            <LeftSection />
            <Container>
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
            </Container>
        </Wrap>
    );
};

export default SlideMenu;

const Wrap = styled.div<StyledType>`
    width: ${(props) => (props.isActive ? "12%" : "0")};
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    background: #fff;
    box-shadow: 0 0 1000px 2000px rgba(0, 0, 0, 0.6);

    padding: 12px 20px;
`;

const Container = styled.div`
    margin-top: 24px;
`;

const MenuSection = styled.div`
    border-bottom: 1px solid ${(props) => props.theme.colors.mainGray};
`;

const MenuItem = styled(Link)`
    width: 100%;
    display: flex;
    gap: 20px;
    padding: 10px 0px;
    text-decoration: none;
    color: #000;
    &:hover {
        background: ${(props) => props.theme.colors.middleGray};
    }
`;

const Icon = styled.img`
    width: 16px;
`;

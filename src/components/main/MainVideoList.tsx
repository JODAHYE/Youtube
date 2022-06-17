import React from "react";
import { useRecoilValue } from "recoil";
import { menuState } from "../../states/menu";
import styled from "styled-components";
import { mainVideoState } from "../../states/videos";
import MainViedoItem from "./MainViedoItem";

type StyledType = {
    isOpenMenu: boolean;
};

const MainVideoList = () => {
    const isOpenMenu = useRecoilValue(menuState);
    const mainVideoList = useRecoilValue(mainVideoState);
    return (
        <Wrap isOpenMenu={isOpenMenu}>
            {mainVideoList.map((video, i) => (
                <MainViedoItem
                    key={video.id.videoId + i}
                    video={video.snippet}
                />
            ))}
        </Wrap>
    );
};

export default MainVideoList;

const Wrap = styled.div<StyledType>`
    width: ${(props) => (props.isOpenMenu ? "96%" : "100%")};

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    margin: 0 auto;
    padding: 30px 0;
`;

import React from "react";
import { useRecoilValue } from "recoil";
import { menuState } from "../../states/menu";
import styled from "styled-components";
import { mainTagState } from "../../states/filter";
import MainViedoItem from "./MainViedoItem";
import { useQuery } from "react-query";
import VideoAPI from "../../lib/api/VideoAPI";

type StyledType = {
    isOpenMenu: boolean;
};

const MainVideoList = () => {
    const isOpenMenu = useRecoilValue(menuState);
    const mainTagValue = useRecoilValue(mainTagState);

    const { data } = useQuery(mainTagValue, () => {
        return VideoAPI.getMainVideoList(mainTagValue);
    });

    return (
        <Wrap isOpenMenu={isOpenMenu}>
            {data?.data.items.map((video, i) => (
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

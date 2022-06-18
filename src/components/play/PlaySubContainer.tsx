import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { subVideoState } from "../../states/videos";
import PlaySubItem from "./PlaySubItem";

const PlaySubContainer = () => {
    const subVideoListData = useRecoilValue(subVideoState);
    useEffect(() => {
        console.log(subVideoListData);
    }, []);

    return (
        <Wrap>
            {subVideoListData.map((video, i) => (
                <PlaySubItem key={video.id.videoId + i} video={video} />
            ))}
        </Wrap>
    );
};

export default PlaySubContainer;

const Wrap = styled.div`
    border: 1px solid red;
    width: 420px;
`;

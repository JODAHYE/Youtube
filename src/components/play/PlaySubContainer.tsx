import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { SearchVideoType } from "../../states/videoType";
import PlaySubItem from "./PlaySubItem";
import { subVideoState } from "../../states/video";

type DataType = {
    items: SearchVideoType[];
};

const PlaySubContainer = () => {
    const subVideoListValue = useRecoilValue<DataType>(subVideoState);

    return (
        <Wrap>
            {subVideoListValue?.items.map((video, i) => (
                <PlaySubItem key={video.id.videoId + i} video={video} />
            ))}
        </Wrap>
    );
};

export default PlaySubContainer;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    min-width: 340px;
    width: 340px;
    max-width: 340px;
`;

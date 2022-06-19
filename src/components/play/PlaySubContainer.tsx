import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import VideoAPI from "../../lib/api/VideoAPI";
import { playChannelId } from "../../states/filter";
import styled from "styled-components";
import { SearchVideoType } from "src/states/videoType";
import PlaySubItem from "./PlaySubItem";

type DataType = {
    data: {
        items: SearchVideoType[];
    };
};

const PlaySubContainer = () => {
    const playChannelIdValue = useRecoilValue(playChannelId);

    const { data }: { data: DataType } = useQuery(playChannelIdValue, () => {
        return VideoAPI.getChannelVideoList(playChannelIdValue);
    });

    // useEffect(() => {
    //     console.log("플래이", data?.data.items);
    // }, [data]);

    return (
        <Wrap>
            {data?.data.items.map((video, i) => (
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

    width: 420px;
`;

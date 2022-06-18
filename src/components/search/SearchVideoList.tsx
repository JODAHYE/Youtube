import React, { useEffect } from "react";
import styled from "styled-components";
import SearchViedoItem from "./SearchViedoItem";
import { useQuery } from "react-query";
import VideoAPI from "../../lib/api/VideoAPI";
import { useRecoilValue } from "recoil";
import { searchInputState } from "../../states/filter";
import { SearchVideoType } from "src/states/videoType";

type DataType = {
    data: {
        items: SearchVideoType[];
    };
};

const SearchVideoList = () => {
    const searchInputValue = useRecoilValue(searchInputState);

    const { data }: { data: DataType } = useQuery(searchInputValue, () => {
        return VideoAPI.getSearchVideoList(searchInputValue);
    });

    useEffect(() => {
        console.log(data?.data.items);
    }, [data]);

    return (
        <Wrap>
            {data?.data.items.map((video, i) => (
                <SearchViedoItem key={video.id.videoId + i} video={video} />
            ))}
        </Wrap>
    );
};

export default SearchVideoList;

const Wrap = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    padding: 50px;
`;

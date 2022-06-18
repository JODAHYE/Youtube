import React from "react";
import styled from "styled-components";
import SearchViedoItem from "./SearchViedoItem";
import { useQuery } from "react-query";
import VideoAPI from "../../lib/api/VideoAPI";
import { useRecoilValue } from "recoil";
import { searchInputState } from "../../states/filter";

const SearchVideoList = () => {
    const searchInputValue = useRecoilValue(searchInputState);

    const { data } = useQuery(searchInputValue, () => {
        return VideoAPI.getSearchVideoList(searchInputValue);
    });

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

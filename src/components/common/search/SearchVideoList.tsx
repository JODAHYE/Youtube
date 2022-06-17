import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { searchState, searchVideoState } from "../../../states/search";
import styled from "styled-components";
import SearchViedoItem from "./SearchViedoItem";

const SearchVideoList = () => {
    const searchVideoList = useRecoilValue(searchVideoState);

    return (
        <Wrap>
            {searchVideoList.map((video, i) => (
                <SearchViedoItem
                    key={video.id.videoId + i}
                    video={video.snippet}
                />
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

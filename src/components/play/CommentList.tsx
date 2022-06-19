import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router";
import styled from "styled-components";

import { CommentType } from "../../states/CommentType";
import CommentAPI from "../../lib/api/CommentAPI";

type DataType = {
    data: {
        items: CommentType[];
    };
};

const CommentList = () => {
    const location = useLocation();

    const playVieoId = location.search.split("&")[0].substring(3);

    const { data }: { data: DataType } = useQuery(
        `comment+${playVieoId}`,
        () => {
            return CommentAPI.getPlayVideoCommentList(playVieoId);
        }
    );

    useEffect(() => {
        console.log("플래이", data?.data.items);
    }, [data]);

    return <Wrap>{}</Wrap>;
};

export default CommentList;

const Wrap = styled.div``;

import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

// import { CommentType } from "../../states/commentType";
import CommentItem from "./CommentItem";
import { commentState } from "../../states/comment";

// type DataType = {
//     items: CommentType[];
// };

const CommentList = () => {
    // const commentListValue = useRecoilValue<DataType>(commentState);
    const commentListValue = useRecoilValue<any>(commentState);

    return (
        <Wrap>
            {commentListValue?.items.map((comment, i) => (
                <CommentItem
                    key={comment.id}
                    comment={comment.snippet.topLevelComment.snippet}
                />
            ))}
        </Wrap>
    );
};

export default CommentList;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 20px 0;
`;

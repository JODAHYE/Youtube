import React from "react";
import styled from "styled-components";

// import { TopLevelCommentSnippetType } from "../../states/commentType";

type StyledType = {
    time: string;
};

const CommentItem = ({ comment }: { comment: any }) => {
    return (
        <Wrap>
            <ProfileImg src={comment.authorProfileImageUrl} />
            <div>
                <Name time={comment.publishedAt}>
                    {comment.authorDisplayName}
                </Name>
                <Content>{comment.textOriginal}</Content>
            </div>
        </Wrap>
    );
};

export default CommentItem;

const Wrap = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 6px;
`;

const ProfileImg = styled.img`
    border-radius: 50%;
    min-width: 40px;
    margin-right: 6px;
`;

const Name = styled.p<StyledType>`
    font-size: 0.6875rem;
    margin-bottom: 3px;
    &:after {
        content: "${(props) => props.time}";
        color: ${(props) => props.theme.colors.darkGray};
        font-size: 0.625rem;
        margin-left: 2px;
    }
`;

const Content = styled.p`
    font-size: 0.6875rem;
    line-height: 1.3em;
`;

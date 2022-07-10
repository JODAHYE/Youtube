export type TopLevelCommentSnippetType = {
    authorChannelId: {
        value: string;
    };
    authorChannelUrl: string;
    authorDisplayName: string;
    authorProfileImageUrl: string;
    canRate: boolean;
    likeCount: number;
    publishedAt: string;
    textDisplay: string;
    textOriginal: string;
    updatedAt: string;
    videoId: string;
    viewerRating: string;
};

export type snippetType = {
    canReply: boolean;
    isPublic: boolean;
    topLevelComment: {
        etag: string;
        id: string;
        kind: string;
        snippet: TopLevelCommentSnippetType; //필요한 데이터
    };
    totalReplyCount: number;
    videoId: string;
};

export type CommentType = {
    etag: string;
    id: string;
    kind: string;
    snippet: snippetType;
};

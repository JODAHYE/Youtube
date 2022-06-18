type ThumbnailInfoType = {
    height: number;
    url: string;
    width: number;
};

type ThumbnailType = {
    default: ThumbnailInfoType;
    medium: ThumbnailInfoType;
    high: ThumbnailInfoType;
    maxres?: ThumbnailInfoType;
    standard?: ThumbnailInfoType;
};

export type SearchVideoTtype = {
    etag: string;
    id: {
        kind: string;
        videoId: string;
    };
    kind: string;
    snippet: {
        channelId: string;
        channelTitle: string;
        description: string;
        liveBroadcastContent: string;
        publishTime: string;
        publishedAt: string;
        thumbnails: ThumbnailType;
        title: string;
    };
};

export type MainVideoType = {
    etag: string;
    id: string;
    kind: string;
    snippet: {
        channelId: string;
        channelTitle: string;
        description: string;
        playListId: string;
        positon: string;
        publishedAt: string;
        thumbnails: ThumbnailType;
        title: string;
        videoOwnerChannelId: string;
        videoOwnerChannelTitle: string;
    };
};

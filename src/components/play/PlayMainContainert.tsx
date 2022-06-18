import React, { useEffect } from "react";
import { useLocation } from "react-router";
import YouTube from "react-youtube";
import { useSetRecoilState } from "recoil";
import { playChannelId } from "../../states/filter";

const PlayMainContainert = () => {
    const location = useLocation();
    const playVieoId = location.search.split("&")[0].substring(3);
    const setPlayChannelId = useSetRecoilState(playChannelId);

    useEffect(() => {
        setPlayChannelId(location.search.split("&")[1]);
    }, []);

    const opts = {
        width: "1012",
        height: "675",
        playerVars: {
            autoplay: 1,
            rel: 0,
            modestbranding: 1,
        },
    };
    return (
        <div>
            <YouTube
                videoId={playVieoId}
                opts={opts}
                onEnd={(e) => {
                    e.target.stopVideo(0);
                }}
            />
        </div>
    );
};

export default PlayMainContainert;

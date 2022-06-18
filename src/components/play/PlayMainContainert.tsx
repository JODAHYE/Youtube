import React, { useEffect } from "react";
import { useLocation } from "react-router";
import YouTube from "react-youtube";

const PlayMainContainert = () => {
    const location = useLocation();
    const playVieoId = location.search.split("&")[0].substring(3);

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

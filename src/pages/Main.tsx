import axios from "axios";
import React, { useEffect } from "react";
import Header from "../common/Nav/Nav";

const Main = () => {
  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/playlistItems", {
        params: {
          part: "snippet",
          playlistId: "PLVbV9mqtfzKfge1I-S01Kw6HcP-j1E9Gr",
          maxResults: "50",
          key: `${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Main;

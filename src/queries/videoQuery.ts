import { useQuery } from "react-query";
import VideoAPI from "../lib/api/VideoAPI";

export function videoQuery() {
  const mainVideoListQuery = useQuery("mainVideoList", () => {
    return VideoAPI.getMainVideoList();
  });

  return {
    mainVideoListQuery,
  };
}

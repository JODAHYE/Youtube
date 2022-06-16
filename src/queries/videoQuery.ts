import { useQuery } from "react-query";
import VideoAPI from "../lib/api/VideoAPI";

export function videoQuery(searchValue) {
  const mainVideoListQuery = useQuery("mainVideoList", () => {
    return VideoAPI.getMainVideoList();
  });

  const searchVideoQuery = useQuery("saerchVideoList", () => {
    return VideoAPI.getSearchVideoList(searchValue);
  });

  return {
    mainVideoListQuery,
    searchVideoQuery,
  };
}

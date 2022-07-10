import Axios from "axios";

export const axiosInstance = Axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
});

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

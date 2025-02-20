import axios from "axios";
import axiosInstance from "./AxiosInterceptors";

const userService = {
    getUserInfo: async (userId) => {
        try {
            const res = await axiosInstance.get(`/user/${userId}`);
            return res.data.data;
        } catch (error) {
            console.error("Error fetching user info:", error);
            throw error;
        }
    },
};

export default userService;
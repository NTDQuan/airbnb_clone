import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/homestay';

const homestayService = {
    getAllHomestays: async () => {
        try {
            const response = await axios.get(API_BASE_URL + "/", { withCredentials: true })
            return response.data;
        } catch (error) {
            console.error('Error fetching homestays:', error);
            throw error;
        }
    },

    addNewHomestay: async (homestayRequest) => {
        try {
            const response = await axios.post(API_BASE_URL + "/", homestayRequest, { withCredentials: true });
            return response.data.id;
        } catch (error) {
            console.error('Error adding new homestay:', error);
            throw error;
        }
    },
};

export default homestayService;
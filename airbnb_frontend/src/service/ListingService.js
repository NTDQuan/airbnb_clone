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

    editHomestayDetail: async (id, homestayRequest) => {
        try {
            const response = await axios.patch(API_BASE_URL + "/" + id, homestayRequest, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error('Error editing homestay detail:', error);
            throw error;
        }
    },

    getHomeStayCardById: async (id) => {
        try {
            const response = await axios.get(API_BASE_URL + "/preview/" + id, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error('Error fetching homestay card:', error);
            throw error;
        }
    }
};

export default homestayService;
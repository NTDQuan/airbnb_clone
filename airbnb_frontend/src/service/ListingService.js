import axios from 'axios';
import axiosInstance from './AxiosInterceptors.js'; 

const homestayService = {
    getAllHomestays: async () => {
        try {
            const response = await axiosInstance.get("/homestay/public/listing/{id}");
            return response.data.data;
        } catch (error) {
            console.error('Error fetching homestays:', error);
            throw error;
        }
    },

    addNewHomestay: async (homestayRequest) => {
        try {
            const response = await axiosInstance.post("/homestay/", homestayRequest);
            return response.data.data.id;
        } catch (error) {
            console.error('Error adding new homestay:', error);
            throw error;
        }
    },

    editHomestayDetail: async (id, homestayRequest) => {
        try {
            const response = await axiosInstance.patch(`/homestay/${id}`, homestayRequest);
            return response.data.data;
        } catch (error) {
            console.error('Error editing homestay detail:', error);
            throw error;
        }
    },

    finishCreateHomestay: async (id) => {
        try {
            const response = await axiosInstance.patch(`/homestay/finish/${id}`);
            return response.data.data;
        } catch (error) {
            console.error('Error finishing creating homestay:', error);
            throw error;
        }
    },

    getHomeStayCardById: async (id) => {
        try {
            const response = await axiosInstance.get(`/homestay/public/preview/${id}`);
            return response.data.data;
        } catch (error) {
            console.error('Error fetching homestay card:', error);
            throw error;
        }
    },

    getAllHomestayCard: async () => {
        try {
            const response = await axiosInstance.get('/homestay/public/preview');
            return response.data.data;
        } catch (error) {
            console.error('Error fetching homestay card:', error);
            throw error;
        }
    }
};

export default homestayService;
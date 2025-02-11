import axios from 'axios';
import axiosInstance from './AxiosInterceptors.js'; 

const homestayService = {
    getAllHomestays: async () => {
        try {
            const response = await axiosInstance.get("/homestay/listing");
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
    },

    getHomestayInfo: async (id) => {
        try {
            const response = await axiosInstance.get(`/homestay/public/${id}`);
            return response.data.data;
        } catch (error) {
            console.error('Error fetching homestay info:', error);
            throw error;
        }
    },

    bookHomestay: async (reservationRequest) => {
        try {
            await axiosInstance.post('/bookings', reservationRequest);
        } catch (error) {
            console.error('Failed to create reservation')
        }
    },

    checkSelfBooked: async (homestayId, userId) => {
        try {
            const response = await axiosInstance.get(`/bookings/check/${userId}/${homestayId}`);
            return response.data;
        } catch (error) {
            console.error('Error checking booking:', error);
            throw error;
        }
    },

    getBookedDate: async (homestayId) => {
        try {
            const response = await axiosInstance.get(`/bookings/unavailabledates/${homestayId}`);
            return response.data.data;
        } catch (error) {
            console.error('Error fetching homestay info:', error);
            throw error;
        }
    },

    searchFilteredHomestayCard: async (filter) => {
        try {
            const response = await axiosInstance.get(`/homestay/public/search`, { params: filter });
            console.log('Request URL:', `/homestay/public/search?${new URLSearchParams(filter).toString()}`);
            console.log('API called')
            console.log(response)
            return response.data.data;
        } catch (error) {
            console.error('Error fetching homestay card:', error);
            throw error;
        }
    }
};

export default homestayService;
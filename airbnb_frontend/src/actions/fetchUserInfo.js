import axios from 'axios'

const fetchUserInfo = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/user/', { withCredentials: true });
      return res.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
};

export default fetchUserInfo;
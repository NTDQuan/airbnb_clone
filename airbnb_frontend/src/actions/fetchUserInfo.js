import axios from 'axios'

const fetchUserInfo = async (token) => {
    try {
      const res = await axios.get('http://localhost:8080/api/user/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return res.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
};

export default fetchUserInfo;
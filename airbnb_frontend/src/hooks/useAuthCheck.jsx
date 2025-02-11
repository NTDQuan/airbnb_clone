import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import useUserData from "./useUserData";

const useAuthCheck = () => {
    const navigate = useNavigate();
    const { user, onLogout } = useUserData();
  
    useEffect(() => {
      const checkToken = () => {
        if (user) {
          try {
            const decodedToken = jwtDecode(user.token);
            if (decodedToken.exp * 1000 < Date.now()) {
              alert("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
              onLogout();
              navigate("/");
            }
          } catch (error) {
            console.error("Lỗi khi giải mã token:", error);
            onLogout();
            navigate("/");
          }
        }
      };
  
      checkToken();
  
      // Kiểm tra định kỳ mỗi 60 giây
      const interval = setInterval(checkToken, 60000);
      return () => clearInterval(interval);
    }, [user, onLogout, navigate]);
  
    return null;
  };

export default useAuthCheck

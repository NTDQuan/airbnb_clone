import { Navigate } from "react-router-dom";
import useUserData from "../hooks/useUserData";

export const PrivateRoute = ({ children }) => {
    const userData = useUserData();
    console.log("---private route---");
    console.log({ userData });
    console.log("---private route---");
    if (!userData.user) {
        return <Navigate to="/" />;
    }
    return children;
}
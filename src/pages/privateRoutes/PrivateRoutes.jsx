import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    
    if (loading) {
        return <>
            <h2 className=" text-red-500">Loading........</h2>
        </>
    }

    if (user) {
        return children
    }
    

    return <Navigate to = '/login'> Login</Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;
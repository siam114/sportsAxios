import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../page/Loading";

const PrivateRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    if(loading){
        return <Loading/>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PrivateRoute;
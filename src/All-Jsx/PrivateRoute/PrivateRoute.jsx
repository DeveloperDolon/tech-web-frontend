
import PropTypes from "prop-types";
import { useContext } from "react";
import { DataContext } from "../Context-Api/Data-Context";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(DataContext);

    if(user) {
        return <>
            {children}
        </>;
    }

    if(loading) {
        return <div className="h-screen w-full flex justify-center items-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
    }

    return (
       <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children : PropTypes.node
}
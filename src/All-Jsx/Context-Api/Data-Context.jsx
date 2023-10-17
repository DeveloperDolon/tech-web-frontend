
import PropTypes from "prop-types";
import { createContext } from "react";


export const DataContext = createContext();

const ContextApi = ({children}) => {

    const allData = {

    }

    return (
        <DataContext.Provider value={allData}>
            {children}
        </DataContext.Provider>
    );
};

export default ContextApi;

ContextApi.propTypes = {
    children: PropTypes.node
}
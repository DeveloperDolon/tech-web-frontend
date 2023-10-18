
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";


export const DataContext = createContext();

const ContextApi = ({children}) => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);

    const loginWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUserWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
            console.log(currentUser)
        })
    }, []);


    const allData = {
        loginWithEmailPassword, 
        createUserWithEmailPassword,
        user
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
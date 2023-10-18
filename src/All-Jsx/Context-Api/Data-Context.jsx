
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";


export const DataContext = createContext();

const ContextApi = ({children}) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);

    const loginWithEmailPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUserWithEmailPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser)
        })
    }, []);


    const allData = {
        loginWithEmailPassword, 
        createUserWithEmailPassword,
        user,
        logOut,
        loading,
        googleLogin
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
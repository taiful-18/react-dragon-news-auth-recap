import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const providerContext = createContext(null)


const Provider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user)


    const createUsers = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser)
        })
    }, [])
    const logOut = () => {
        return signOut(auth)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const providerINFO = {
        user,
        setUser,
        createUsers,
        logOut,
        login
    }
    return (
        <providerContext.Provider value={providerINFO}>
            {children}
        </providerContext.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.node.isRequired
};

export default Provider;
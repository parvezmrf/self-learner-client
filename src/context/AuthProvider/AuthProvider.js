import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContex = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //Google login provider
    const loginProvider = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // register and login with email password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userProfileUpdate = (profile) => {
        updateProfile(auth.currentUser, profile)
    }

    // logout 
    const logOut = () => {
        setLoading(false);
        return signOut(auth)
    }


    // user monitoring
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authinfo = {
        user,
        createUser,
        signIn,
        loginProvider,
        userProfileUpdate,
        logOut,
        loading
    }
    return (
        <AuthContex.Provider value={authinfo} >
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;
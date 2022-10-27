import React from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContex = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const loginProvider = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state', currentUser);
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authinfo = { user, loginProvider, logOut }
    return (
        <AuthContex.Provider value={authinfo} >
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;
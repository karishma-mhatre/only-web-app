import React, { useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut as firebaseSignOut  } from 'firebase/auth';

import AuthContext from './AuthContext';
import { firebaseAuth } from '../utils/firebase';

export function AuthProvider({ children }) {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (loggedInUser) => {
            setUser(loggedInUser)
        })

        return unsubscribe;
    }, []);

    const signUp = async (email, password) => {
        console.log('sign up called');
        const response = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        setUser(response.user);
    }

    const login = async (email, password) => {
        console.log('Login called');
        const response = await signInWithEmailAndPassword(firebaseAuth, email, password);
        setUser(response.user);
    }

    const signOut = async () => {
        await firebaseSignOut(firebaseAuth)
    }


    return (
        <AuthContext.Provider value={{ user, signUp, login, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}
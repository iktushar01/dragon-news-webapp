import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';


const auth = getAuth(app);
const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null);
    console.log(user)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword (auth , email, password);
    }

    useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
        });
        return () =>{
            unsubscribe()
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser
    }
    return (
        <div>
            <AuthContext.Provider value={authData}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
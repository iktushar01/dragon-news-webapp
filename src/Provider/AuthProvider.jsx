import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';


const auth = getAuth(app);
const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null);
    console.log(user)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword (auth , email, password);
    }

    const signin = (email , password) =>{
        return signInWithEmailAndPassword(auth , email ,password)
    }

    const LogOut = () =>{
        return signOut(auth);
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
        createUser,
        LogOut,
        signin
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
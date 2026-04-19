import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../component/Firebase/Firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext()

const Authprovider = ({children}) => {

    const [user, setuser] = useState(null)
    const [loading,setLoading] = useState(true);

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUser =(updateData)=>{
        return updateProfile(auth.currentUser, updateData)
    }
   
    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setuser(currentUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])


    const authInfo ={
       createUser,
       user,
       signInUser,
       signOutUser,
       updateUser,
       setuser,
       loading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;
import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    RecaptchaVerifier,
    signInWithPhoneNumber
} from "firebase/auth";
import {auth} from "./firebase"

const userAuthContext = createContext()

export function UserAuthContextProvider({children}){

    const [user, setUser] =  useState({});

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function login(email, password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logout(){
        return signOut(auth)
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }
    function setUpRecaptcha(number){
        const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth)
        recaptchaVerifier.render()
        return signInWithPhoneNumber(auth, number, recaptchaVerifier)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log(currentUser);
          setUser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      }, []);

    return(
        <userAuthContext.Provider value={{signUp,login,user,logout,googleSignIn,setUpRecaptcha}}>{children}</userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext)
}
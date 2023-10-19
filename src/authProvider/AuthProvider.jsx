import { createContext, useEffect, useState } from "react";
import app from "../firebaseConfig/Firebase.config";
import PropTypes from 'prop-types'; 
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";


export const AuthContext = createContext(null)

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create account
    const createAccount = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // account login
    const accountLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login with google
    const loginGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

     // update profile
    const profileUpdate = (name, image_url) => {
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image_url
        })
    }
    //login out
    const loginOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // onAuthStateChanged
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    },[])

    const userInfo = {
        user,
        loading,
        createAccount,
        accountLogin,
        loginGoogle,
        profileUpdate,
        loginOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;
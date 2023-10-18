import { createContext } from "react";
import app from "../firebaseConfig/Firebase.config";
import PropTypes from 'prop-types'; 
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext(null)

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    // create account
    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // account login
    const accountLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login with google
    const loginGoogle = () => {
        return signInWithPopup(auth, provider);
    }

     // update profile
    const profileUpdate = (name, image_url) => {
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image_url
        })
    }

    const userInfo = {
        createAccount,
        accountLogin,
        loginGoogle,
        profileUpdate
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
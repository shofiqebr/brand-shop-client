import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"; 
import { auth } from './../config/firebaseConfig';


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [brands, setBrands] = useState([]);
   useEffect(() => {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => setBrands(data));
    }, []);

    const googleLogin = () =>{
      return signInWithPopup(auth,googleProvider)
    }

    const createUser = (email,password) => {
      return createUserWithEmailAndPassword(auth,email,password)
    }





    const authInfo = {
        brands,
        googleLogin,
        createUser
    }

    return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
)};

export default AuthProvider;
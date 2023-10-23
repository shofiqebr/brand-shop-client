import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"; 
import { auth } from './../config/firebaseConfig';


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [brands, setBrands] = useState([]);
    const [user,setUser] = useState({})
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

      const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
      }

      const logOut = () => {
        return signOut(auth)
    }

      
      useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
          setUser(user)
        })
      },[])
      console.log(user);


    const authInfo = {
        brands,
        googleLogin,
        createUser,
        signIn,
        logOut,
        user
    }

    return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
)};

export default AuthProvider;
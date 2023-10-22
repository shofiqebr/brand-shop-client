import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => setBrands(data));
    }, []);

    const authInfo = {
        brands
    }

    return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
)};

export default AuthProvider;
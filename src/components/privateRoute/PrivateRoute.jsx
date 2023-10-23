

import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);


   
    if (loading) return <h1 className="text-5xl">Loading</h1>
        
    if (!user?.email) {
        return <Navigate to='/login' />
    }



    return children;
};

export default PrivateRoute;
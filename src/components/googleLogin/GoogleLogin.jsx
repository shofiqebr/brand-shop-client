
import { useContext } from 'react';
import { AuthContext } from './../../authProvider/AuthProvider';

const GoogleLogin = () => {

const {googleLogin} = useContext(AuthContext);

const handleGoogleLogin = (media) =>{
    media()
    .then(res => console.log(res))
    .catch(err=>console.log(err))
}

    return (
        <div>
            <button 
            onClick={()=>handleGoogleLogin(googleLogin)}
            className="btn btn-neutral btn-sm">Google Login</button>
        </div>
    );
};

export default GoogleLogin;
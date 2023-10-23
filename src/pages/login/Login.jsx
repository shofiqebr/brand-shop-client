import { useContext } from "react";
import GoogleLogin from "../../components/googleLogin/GoogleLogin";
import { AuthContext } from "../../authProvider/AuthProvider";


const Login = () => {

const {signIn} = useContext(AuthContext)

const handleSubmit = event =>{
  event.preventDefault();
   const form = event.target;
   const password = form.password.value;
   const email = form.email.value;
   

  

   signIn(email, password)
   .then(res => {
     console.log('User information:', res.user);
   })
   .catch(error => {
     console.error('Login error:', error.code, error.message);
   });
 
}
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  w-full lg:flex-row-reverse">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="text-center text-3xl font-semibold pt-5">Please Login</div>
            <form onSubmit={handleSubmit} className="card-body">
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input border-indigo-600 bg-slate-100"
                  required
                />
              </div>
          
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input border-indigo-600 bg-slate-100"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
      <GoogleLogin></GoogleLogin>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;
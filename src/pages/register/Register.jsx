import GoogleLogin from "../../components/googleLogin/GoogleLogin";

const Register = () => {
  return (
    <div>


      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  w-full lg:flex-row-reverse">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="text-center text-3xl font-semibold pt-5">Please Register</div>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input border-indigo-600 bg-slate-100"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input border-indigo-600 bg-slate-100"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">image url</span>
                </label>
                <input
                  type="photo"
                  placeholder="image url"
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Register;

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
    const Navlinks = <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      
     
      <li>
        <NavLink to="/addProduct">Add product</NavLink>
      </li>
      <li>
        <NavLink to="/myCart">My cart</NavLink>
      </li>

      <li>
        <NavLink to="/register">Register</NavLink>
      </li>

      </>
  return (
    <div >
      <div className="navbar bg-[#1c6020] bg-opacity-80 text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {Navlinks}
            </ul>
          </div>
         
          <a className="btn btn-ghost normal-case text-xl">
          <img className=" w-10 h-10 rounded-full " src="https://i.ibb.co/PgsPNkF/pexels-photo-9843280.jpg" alt="logo" />
        <span className="font-bold">Rich Brands</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {Navlinks}
          </ul>
        </div>
        <div className="navbar-end">
        {
                        user?.email ? <div className="flex justify-center items-center ">
                          <div>{user.displayName}</div>
                          <div><img className="avatar btn-circle m-5" src={user.photoURL} alt="" /></div>
                          <div><button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button></div>
                        </div>
                        // <div className="lg:flex lg:flex-row-reverse lg:justify-center lg:items-center dropdown dropdown-end">
                        //     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        //         <div className="w-10  rounded-full">
                        //             <img src={user.photoURL} alt={user.displayName} />
                        //         </div>
                        //     </label>
                        //     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        //         <li>
                        //             <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                        //         </li>
                        //         <li>
                        //             <button className="btn btn-sm  btn-ghost"
                        //                 onClick={logOut}
                        //             >Logout</button>

                        //         </li>
                        //     </ul>
                        // </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
        </div>
      </div>
    </div>
  );
};

export default Navbar;

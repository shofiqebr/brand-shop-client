import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../pages/footer/Footer";


const Root = () => {
    return (
        <div className='xl:container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;

// #1e1c60
// #603f1c
// #1c6020
// #601d1c
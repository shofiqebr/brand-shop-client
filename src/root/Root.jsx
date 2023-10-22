import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from './../pages/footer/Footer';
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div className='xl:container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default Root;

// #1e1c60
// #603f1c
// #1c6020
// #601d1c
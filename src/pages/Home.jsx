

import Banner from "../components/banner/Banner";
import BrandNames from "../components/brandNames/BrandNames";
import OurUsedCar from "../components/ourUsedCar/OurUsedCar";
import WhyChoose from "../components/whyChoose/WhyChoose";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-5">

            <BrandNames></BrandNames>
                </div>
                <div className="col-span-1 ">

            <WhyChoose></WhyChoose>
                </div>

            </div>
            <OurUsedCar></OurUsedCar>
        </div>
    );
};

export default Home;
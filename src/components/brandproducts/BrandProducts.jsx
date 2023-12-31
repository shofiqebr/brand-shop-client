import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";



import { AuthContext } from './../../authProvider/AuthProvider';
import Slider1 from './../slider/Slider1';
import CarCard from './../carCard/CarCard';






const BrandProducts = () => {
  const { brandName } = useParams();

  const cars = useLoaderData();
  const {brands} = useContext(AuthContext)
  const filteredCars = cars.filter((car) => car.brandName == brandName);
  console.log(brands);
 
  return (
    <div>
      <div className="my-20">

      <Slider1></Slider1>
      </div>
    <div className="grid grid-cols-1 gap-10 justify-center items-center">

      {filteredCars.length > 0 ? (
        filteredCars.map((car) => (
          <CarCard key={car._id} car={car}></CarCard>
        ))
      ) : (
        <p className="text-5xl text-center font-semibold my-20">No cars available for {brandName}.</p>
      )}
    </div>
    </div>
  );
};

export default BrandProducts;
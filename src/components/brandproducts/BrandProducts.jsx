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
      
      <Slider1></Slider1>
      {cars.length}
      {filteredCars.length > 0 ? (
        filteredCars.map((car) => (
          <CarCard key={car._id} car={car}></CarCard>
        ))
      ) : (
        <p>No cars available for {brandName}.</p>
      )}
    </div>
  );
};

export default BrandProducts;
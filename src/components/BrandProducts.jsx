import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import Slider1 from "./slider/Slider1";


const BrandProducts = () => {
  const {brands} = useContext(AuthContext)
  console.log(brands);
  const { id } = useParams();
  return (
    <div>
      
      <Slider1></Slider1>
    </div>
  );
};

export default BrandProducts;
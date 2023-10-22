// import { useEffect, useState } from "react";

// import { useContext } from "react";
// import { AuthContext } from "../authProvider/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";


const BrandNames = () => {
  const {brands} = useContext(AuthContext);
  
  const {id} =brands;
  // const [brands, setBrands] = useState([]);

  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((res) => res.json())
  //     .then((data) => setBrands(data));
  // }, []);

  return (
    <div>
      <h1 className="text-7xl p-10 text-bold">Brands We Offer</h1>
        {/* <Link to={`/brandProducts/${id}`}> */}
        {/* //  key={index}> */}

    <div className=" grid grid-cols-3 gap-10 m-10">
       {brands.map((brand, index) => (
       <Link to={`/brandProducts/${brand.id}`} key={brands.id}>
        
        <div key={index} className="card bg-[#603f1c] shadow-xl">
          <figure>
            <img className="h-80 w-full" src={brand.Image} alt={brand.BrandName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">{brand.BrandName}</h2>
       
            
          </div>

        </div>
        </Link>
       
      ))}
     
    </div>
    {/* // </Link> */}
    </div>
    
  );
};

export default BrandNames;

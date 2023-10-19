import { useEffect, useState } from "react";

const BrandNames = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className=" grid grid-cols-3 gap-10 m-10">
       {brands.map((brand, index) => (
        <div key={index} className="card w-96 bg-[#603f1c] shadow-xl">
          <figure>
            <img className="h-80" src={brand.Image} alt={brand.Name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">{brand.Name}</h2>
       
            
          </div>
        </div>
      ))}
     
    </div>
  );
};

export default BrandNames;


import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";


const BrandNames = () => {
  const {brands} = useContext(AuthContext);
  
  const {id} =brands;
  

  return (
    <div>
      <h1 className="text-7xl p-10 text-bold">Brands We Offer</h1>
   

    <div className=" grid grid-cols-3 gap-10 m-10">
       {brands.map((brand) => (
       <Link to={`/brandproducts/${brand.brandName}`} key={brands.id}>
        
        <div className="card bg-[#603f1c] shadow-xl">
          <figure>
            <img className="h-80 w-full" src={brand.Image} alt={brand.brandName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">{brand.brandName}</h2>
       
            
          </div>

        </div>
        </Link>
       
      ))}
     
    </div>

    </div>
    
  );
};

export default BrandNames;

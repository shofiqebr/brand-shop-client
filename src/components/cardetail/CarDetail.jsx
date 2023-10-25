import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const CarDetail = () => {
    const car = useLoaderData();
    const [cart, setCart] = useState([]);
    
    const {_id, name, photo, 
        brandName, 
        price, 
        ShortDescription, type, rating}= car;


        const handleAddToCart = async () => {
          try {
            // Send a POST request to your server to save the car data to the cart
            const response = await fetch('/https://automotive-brand-shop-serverside-4h7p7nxyj.vercel.app/addToCart', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(car),
            });
      
            if (response.ok) {
              // If the request was successful, add the car to the local cart state
              setCart([...cart, car]);
            } else {
              console.error('Error adding car to cart');
            }
          } catch (error) {
            console.error(error);
          }
        }
  return (
    <div className="flex justify-center items-center">
      <div className="card text-center w-[500px] bg- glass">

        <div className="text-center my-8 text-4xl font-extrabold">
          {name}
        </div>
        <figure>
          <img 
            src={photo}
            className="h-96 w-80 rounded-lg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{price}</h2>
          <p>{ShortDescription}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions justify-end">

            <Link to={`/myCart/${_id}`}>
            
            <button className="btn btn-primary">Add to Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;

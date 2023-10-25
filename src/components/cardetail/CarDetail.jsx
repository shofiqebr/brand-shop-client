import { useLoaderData } from "react-router-dom";

const CarDetail = () => {
    const car = useLoaderData();
    
    const {_id, name, photo, 
        brandName, 
        price, 
        ShortDescription, type, rating}= car;
  return (
    <div className="flex justify-center items-center">
      <div className="card text-center w-[500px] bg- glass">

        <div className="text-center my-8 text-4xl font-extrabold">
          {name}
        </div>
        <figure>
          <img
            src={photo}
            className="rounded-lg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{price}</h2>
          <p>{ShortDescription}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;

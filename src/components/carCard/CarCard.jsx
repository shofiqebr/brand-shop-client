import { Link } from "react-router-dom";

const CarCard = ({car}) => {

    const {_id, name, photo, 
        brandName, 
        price, 
        ShortDescription, type, rating}= car;

  return (
    <div>
      <div className="card w-3/4 mb-5 card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 w-96"
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Brand Name:{brandName}</p>
          <p>Type:{type}</p>
          <p>Price:{price}</p>
          <p>Rating:{rating}</p>
          <div className="card-actions justify-end">
           <Link to={`/cardetail/${_id}`}>
            <button className="btn btn-primary">Details</button>
           </Link>

           <Link to={`/update/${_id}`}>
            <button className="btn btn-primary">Update</button>
           
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
// - Image
// - Name
// - Band Name
// - Type (If you choose `Technology and Electronics` category ,then the types of products will be phone, computer, headphone, etc)
// - Price
// - Rating
// - Details button
// - Update button

export default CarCard;

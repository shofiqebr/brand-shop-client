import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const car = useLoaderData();
  
    const {_id, name, photo, 
        brandName, 
        price, type, rating}= car;
    const handleUpdateCar = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const brandName = form.brandName.value;
        const rating = form.rating.value;
        const type = form.type.value;
        
        const photo = form.photo.value;

        const updatedCar = { name,price,brandName,rating,type, photo }

        console.log(updatedCar);

        // send data to the server
        fetch(`https://automotive-brand-shop-serverside-4h7p7nxyj.vercel.app/car/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
              <div className="text-5xl text-center">Update Car {name}</div>
      <form onSubmit={handleUpdateCar}>
       
        <div className="flex justify-around">
          <div className="form-control">
            <input
              type="text"
              placeholder="Name"
              name="name" defaultValue={name}
              className="p-3 m-2 border-b-2 w-[600px] max-w-xs"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Brand Name"
              name="brandName" defaultValue={brandName}
              className="p-3 m-2 border-b-2 w-[600px] max-w-xs"
            />
          </div>
        </div>
        <div className="flex justify-around">
          <div className="form-control">
            <input
              type="text"
              placeholder="Price"
              name="price" defaultValue={price}
              className="p-3 m-2 border-b-2 w-[600px] max-w-xs"
            />
          </div>
          <div className="form-control">
          <div className="form-control">
            <input
              type="text"
              placeholder="rating"
              name="rating" defaultValue={rating}
              className="p-3 m-2 border-b-2 w-[600px] max-w-xs"
            />
          </div>
          </div>
        </div>
        

        <div className="flex justify-around">
         
          <div className="form-control">
            <input
              type="text"
              placeholder="photo url"
              name="photo" defaultValue={photo}
              className="p-3 m-2 border-b-2 w-[600px] max-w-xs"
            />
          </div>
        </div>
        <div className="form-control   p-2 my-3 border border-gray-500 flex justify-center items-center">
            <div>

        <label htmlFor="type">update your brand:</label>
            </div>
            <div>

            <select name="type" defaultValue={type} id="">
                <option value="Toyota">Toyota</option>
               <option value="Ford">Ford</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Tesla">Tesla</option>
                <option value="Honda">Honda</option>
            </select>
            </div>
        </div>


       <button> <input type="submit" value="update Car" className="btn py-2 my-2 btn-block"/></button>

      </form>
        </div>
    );
};

export default Update;
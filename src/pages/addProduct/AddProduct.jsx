const AddProduct = () => {
    const handleAddCar = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const ShortDescription = form.ShortDescription.value;
        const rating = form.rating.value;
        const type = form.type.value;
        const photo = form.photo.value;

        const newCar = { name, brandName, price,ShortDescription, rating, type, photo }

        console.log(newCar);
        fetch('http://localhost:5000/car', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if(data.insertedId){
                //     Swal.fire({
                //         title: 'Success!',
                //         text: 'Coffee Added Successfully',
                //         icon: 'success',
                //         confirmButtonText: 'Cool'
                //       })
                // }
            })
    }
  return (
    <div>
        <div className="text-5xl text-center">Add Car</div>
      <form onSubmit={handleAddCar}>
       
        <div className="flex justify-around">
          <div className="form-control">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="p-3 m-2 border-b-2 w-[600px] max-w-xs"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Brand Name"
              name="brandName"
              className="p-3 m-2 border-b-2 w-[600px] max-w-xs"
            />
          </div>
        </div>
        <div className="flex justify-around">
          <div className="form-control">
            <input
              type="number"
              placeholder="Price"
              name="price"
              className="p-3 m-2 border-b-2 w-[600px] max-w-xs"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Short_description"
              name="ShortDescription"
              className="p-3 m-2 border-b-2 w-[600px] max-w-xs"
            />
          </div>
        </div>
        

        <div className="flex justify-around">
          <div className="form-control">
            <input
              type="number"
              placeholder="rating"
              name="rating"
              className="p-3 m-2 border-b-2 w-[600px] max-w-xs"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="photo url"
              name="photo"
              className="p-3 m-2 border-b-2 w-[600px] max-w-xs"
            />
          </div>
        </div>
        <div className="form-control   p-2 my-3 border border-gray-500 flex justify-center items-center">
            <div>

        <label htmlFor="type">select your brand:</label>
            </div>
            <div>

            <select name="type" id="">
                <option value="Toyota">Toyota</option>
               <option value="Ford">Ford</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Tesla">Tesla</option>
                <option value="Honda">Honda</option>
            </select>
            </div>
        </div>


        <input type="submit" value="Add Car" className="btn py-2 my-2 btn-block" />

      </form>
    </div>
  );
};

export default AddProduct;

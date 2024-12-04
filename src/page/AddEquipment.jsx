import Swal from "sweetalert2";

const AddEquipment = () => {
    const handleAddEquipment = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const description = form.description.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const status = form.status.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const newEquipment = {name,category,description,customization,time,status,price,rating,photo}
        console.log(newEquipment)

        // send data to the server
        fetch('http://localhost:5000/equipment',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newEquipment)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-8 md:p-20">
        <h2 className="text-3xl font-extrabold text-center mb-10">Add Equipment </h2>
        <form onSubmit={handleAddEquipment}>
            {/* form name and Category row */}
            <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Item Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Item Name" className="input input-bordered w-full"/>
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Category Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" placeholder="Category Name" className="input input-bordered w-full" id="" />
                    </label>
                </div>
            </div>
            {/* form Description and Customization row */}
            <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="Description" className="input input-bordered w-full"/>
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Customization</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="customization" placeholder="Customization" className="input input-bordered w-full" id="" />
                    </label>
                </div>
            </div>
            {/* form Processing Time and Stock Status row */}
            <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Processing Time</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="time" placeholder="Processing Time" className="input input-bordered w-full"/>
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Stock Status</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="status" placeholder="Stock Status" className="input input-bordered w-full" id="" />
                    </label>
                </div>
            </div>
            {/* form Price and Rating row */}
            <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full"/>
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" id="" />
                    </label>
                </div>
            </div>
            {/* form photo url row */}
            <div>
                <div className="form-control w-full mb-5">
                    <label className="label">
                        <span className="label-text font-semibold">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full"/>
                    </label>
                </div>
            </div>
            <input type="submit" value="Add Equipment" className="btn btn-block bg-[#273248] text-white hover:text-black" />
        </form>
    </div>
    );
};

export default AddEquipment;
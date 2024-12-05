import { useLoaderData } from "react-router-dom";

const Details = () => {
    const details = useLoaderData();
    const {category,customization,description,name,photo,price,rating,status,time} =details
    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 min-h-screen">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={photo}
            alt={name}
            className="w-80 h-80 object-cover rounded-lg shadow-md border border-gray-300"
          />
        </div>
  
        {/* Details Section */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0 md:ml-8 bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>
          <p className="text-gray-600">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Description:</span> {description}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Customization:</span> {customization}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Price:</span> ${price}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Rating:</span> {rating} ⭐ 
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Stock Status:</span> {status}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Processing Time:</span> {time}
          </p>
  
          <button className="mt-6 px-6 py-2 bg-[#273248] text-white rounded hover:bg-red-600 transition">
            Buy Now
          </button>
        </div>
      </div>
    );
};

export default Details;
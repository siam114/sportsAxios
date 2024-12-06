import { FaStarHalfAlt } from "react-icons/fa";
import { FaArrowLeftLong, FaRegStar, FaStar } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const generateStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
  }

  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
  }

  return stars;
};

const Details = () => {
  const details = useLoaderData();
  const {
    category,
    customization,
    description,
    name,
    photo,
    price,
    rating,
    status,
    time,
  } = details;
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 min-h-screen">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center  rounded-lg p-6 bg-white">
        <img
          src={photo}
          alt={name}
          className="w-80 h-80 object-cover rounded-lg shadow-md border border-gray-300"
        />
      </div>

      {/* Details Section */}
      <div className="md:w-1/2 w-full mt-6 md:mt-0 md:ml-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>

        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Category:</span> {category}
        </p>

        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Description:</span> {description}
        </p>

        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Customization:</span> {customization}
        </p>

        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Stock Status:</span> {status}
        </p>

        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Processing Time:</span> {time}
        </p>

        <div className="flex items-center mt-4">
          <p className="text-2xl font-bold text-red-500">${price}</p>
          <p className="text-gray-500 text-sm line-through ml-4">
            ${parseInt(price) + 500}
          </p>
          <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded-full ml-4">
            37% OFF
          </span>
        </div>

        <div className="flex items-center mt-3">
          <div className="flex">{generateStars(rating)}</div>
          <span className="ml-2 text-gray-600 text-sm">({rating} Reviews)</span>
        </div>

        <button className="mt-6 px-6 py-2 bg-[#273248] text-white rounded hover:bg-red-600 transition">
          <Link to="/allSports">
            <FaArrowLeftLong className="inline-flex mr-1" /> Back to previous
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Details;

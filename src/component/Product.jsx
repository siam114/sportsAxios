import PropTypes from "prop-types";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Product = ({ product }) => {
    
  const {
    _id,
    category,
    customization,
    description,
    name,
    photo,
    price,
    rating,
    status,
    time,
  } = product;

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

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      data-aos-once="true"
      className="max-w-sm  bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
    >
      <div className="relative ">
        <img src={photo} alt={name} className="w-full h-56 object-fill" />
        {status === "available" && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            Available
          </span>
        )}
        {status === "out of stock" && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Out of Stock
          </span>
        )}
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mt-1">
          {category} | {customization}
        </p>

        <p className="text-sm text-gray-600 mt-2">{description}</p>

        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-xl font-bold text-red-500">${price}</p>
            <p className="text-gray-500 text-xs">Processing Time: {time}</p>
          </div>
          <div className="flex items-center">
            {generateStars(rating)}
            <span className="ml-2 text-gray-600 text-sm">({rating})</span>
          </div>
        </div>

        <div className="my-3">
          <Link
            to={`/equipment/${_id}/details`}
            className="w-full mt-4 px-4 py-2 bg-[#273248] text-white rounded hover:bg-red-600 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;

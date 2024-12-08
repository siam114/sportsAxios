import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const AllProduct = () => {
  const productData = useLoaderData();
  return (
    <div>
      <Fade direction="right" duration={1000}>
        <h2 className="text-3xl font-bold text-center mb-10 mt-10">
          PRODUCT SECTION
        </h2>
      </Fade>
      <div className="grid grid-cols-1 px-10 mx-auto w-11/12 md:grid-cols-3 gap-5 my-10">
        {productData.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;

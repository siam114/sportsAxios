import { useLoaderData } from "react-router-dom";
import HomeSlider from "../component/HomeSlider";
import Leading from "../component/Leading";
import Product from "../component/Product";
import ProudClient from "../component/ProudClient";
import SportsCategory from "../component/SportsCategory";

const Home = () => {
    const productData = useLoaderData();
    
  return (
    <div>
      <HomeSlider />
      <div>
        <SportsCategory />
        <h2 className="text-3xl font-bold text-center mb-10 mt-10">PRODUCT SECTION</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-11/12 mx-auto my-10">
          {
            productData.map((product) => <Product key={product._id} product={product}/>)
          }
        </div>
        <ProudClient />
        <Leading />
      </div>
    </div>
  );
};

export default Home;

import { Link, useLoaderData } from "react-router-dom";
import HomeSlider from "../component/HomeSlider";
import Leading from "../component/Leading";
import Product from "../component/Product";
import ProudClient from "../component/ProudClient";
import SportsCategory from "../component/SportsCategory";
import { Fade } from "react-awesome-reveal";

const Home = () => {
    const productData = useLoaderData();
    console.log(productData);

    
  return (
    <div>
      <HomeSlider />
      <div className="">
        <SportsCategory />
        <Fade direction='right' duration={2000}>
        <h2 className="text-3xl font-bold text-center mb-10 mt-10">PRODUCT SECTION</h2>
        </Fade>
        <div className="grid grid-cols-1 px-10 mx-auto w-11/12 md:grid-cols-3 gap-5 my-10">
          {
            productData.map((product) => <Product key={product._id} product={product}/>)
          }
        </div>
        <button className="mt-4 mx-auto block  px-4 py-3 dark:text-[#273248] dark:bg-slate-300 bg-[#273248] text-white rounded-lg hover:bg-[#273248e5]"><Link to='/products'>More Products</Link></button>
        <ProudClient />
        <Fade direction="right" duration={2000}>
        <Leading />
        </Fade>
      </div>
    </div>
  );
};

export default Home;

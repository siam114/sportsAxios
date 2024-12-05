import HomeSlider from "../component/HomeSlider";
import ProudClient from "../component/ProudClient";

const Home = () => {
    return (
        <div>
            <HomeSlider/>
            <div>
            <h2 className="text-3xl font-bold text-center mb-5 mt-10">OUR PROUD CLIENTS</h2>
            <ProudClient/>
            </div>
        </div>
    );
};

export default Home;
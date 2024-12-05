import HomeSlider from "../component/HomeSlider";
import Leading from "../component/Leading";
import ProudClient from "../component/ProudClient";

const Home = () => {
    return (
        <div>
            <HomeSlider/>
            <div>
            <h2 className="text-3xl font-bold text-center mb-5 mt-10">OUR PROUD CLIENTS</h2>
            <ProudClient/>
            <Leading/>
            </div>
        </div>
    );
};

export default Home;
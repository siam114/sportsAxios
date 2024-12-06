import HomeSlider from "../component/HomeSlider";
import Leading from "../component/Leading";
import ProudClient from "../component/ProudClient";
import SportsCategory from "../component/SportsCategory";

const Home = () => {
    return (
        <div>
            <HomeSlider/>
            <div>
           <SportsCategory/>
            <ProudClient/>
            <Leading/>
            </div>
        </div>
    );
};

export default Home;
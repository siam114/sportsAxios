import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Root = () => {
    return (
        <div className="">
           <Header/>
           <Outlet/> 
           <Footer/>
        </div>
    );
};

export default Root;
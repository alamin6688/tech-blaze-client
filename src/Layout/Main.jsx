import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
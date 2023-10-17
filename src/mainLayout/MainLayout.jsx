import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* header here */}
            <Navbar/>
            {/* outlet here */}
            <Outlet/>
        </div>
    );
};

export default MainLayout;
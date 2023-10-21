import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import { useState } from "react";

const MainLayout = () => {
    const [changeMode, setChangeMode] = useState(false);

    return (
        <div data-theme={changeMode? 'dark': 'light'}>
            {/* header here */}
            <Navbar
                setChangeMode={setChangeMode}
                changeMode={changeMode}
            />
            {/* outlet here */}
            <Outlet/>
        </div>
    );
};

export default MainLayout;
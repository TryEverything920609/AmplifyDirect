import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
const Layout = () => {
    
    const [ show, setShow ] = useState(false);
    return (
        <div className="min-h-screen bg-blue-gray-50/50">
            <Sidebar show={show}/>
            <div className="p-4 xl:ml-80">
                <Header show={show} setShow={setShow}/>
                <main id="content" className="p-5">
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}

export default Layout;

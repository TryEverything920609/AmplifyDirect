import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="min-h-screen bg-blue-gray-50/50">
            <Sidebar/>
            <div className="p-4 xl:ml-80">
                <Header/>
                <main id="content" className="p-5">
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}

export default Layout;

import AuthHeader from "./AuthHeader";
import { Outlet } from "react-router-dom";
import Preloader from "../components/Preloader";
import AuthFooter from "./AuthFooter";

const AuthLayout = () => {
    return (
        <div className="page-wrapper">
            <Preloader/>
            <AuthHeader/>
            <Outlet/>
            <AuthFooter/>
        </div>
    )
}

export default AuthLayout;
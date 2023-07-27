import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import AuthLayout from "./layout/AuthLayout";
import Dashboard from "./pages/Service/Dashboard";
import Billing from "./pages/Service/Billing";
import BusinessUser from "./pages/Service/BusinessUser";
import CallLog from "./pages/Service/CallLog";
import Profile from "./pages/Profile/Profile";
import Setting from "./pages/Service/Setting";
import SmsLog from "./pages/Service/SmsLog";
import States from "./pages/Service/States";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import TollFreeNumbers from "./pages/Service/TollFreeNumbers";
import UserRole from "./pages/Service/UserRole";
const AppRoutes = [
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/tollfreenumber",
        element: <TollFreeNumbers />,
      },
      {
        path: "/states",
        element: <States />,
      },
      {
        path: "/businessuser",
        element: <BusinessUser />,
      },
      {
        path: "/sms",
        element: <SmsLog />,
      },
      {
        path: "/call",
        element: <CallLog />,
      },
      {
        path: "/billing",
        element: <Billing />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/userrole",
        element: <UserRole />,
      },
    ],
  },
];

export default AppRoutes;

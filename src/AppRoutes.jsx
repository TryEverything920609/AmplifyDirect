import AuthLayout from "./Layouts/AuthLayout";
import LandingPage from './pages/LandingPage';
import Login from './pages/Auth/Login';
import SignUp from "./pages/Auth/SignUp";
import { Hub } from "aws-amplify";
import Layout from "./Layouts/Layout";
import Dashboard from "./pages/Services/Dashboard";
import TollFreeNumber from './pages/Services/TollFreeNumbers';
import States from "./pages/Services/States";
import BusinessUser from "./pages/Services/BusinessUser";
import SmsLog from "./pages/Services/SmsLog";
import CallLog from "./pages/Services/CallLog";
import Billing from "./pages/Services/Billing";
import WebForm from "./pages/Services/WebForm";
import Setting from "./pages/Services/Setting";

let Sign = false;

Hub.listen('auth', (data) => {
    switch (data.payload.event) {
      case 'signIn':
          console.log('user signed in');
          Sign = true;
          console.log("Sign in", Sign);
          break;
      case 'signUp':
          console.log('user signed up');
          Sign = false;
          break;
      case 'signOut':
          console.log('user signed out');
          Sign = false;
          break;
      case 'signIn_failure':
          console.log('user sign in failed');
          Sign = false;
          break;
      case 'configured':
          console.log('the Auth module is configured');
    }
});

const AppRoutes = [
    {
        path: '/',
        element: <AuthLayout/>,
        children: [
            {
                path: "/",
                element: <LandingPage/>
            },
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/tollfreenumber",
                element: <TollFreeNumber/>
            },
            {
                path: "/states",
                element: <States/>
            },
            {
                path: "/user",
                element: <BusinessUser/>
            },
            {
                path: "/sms",
                element: <SmsLog/>
            },
            {
                path: "/call",
                element: <CallLog/>
            },
            {
                path: "/billing",
                element: <Billing/>
            },
            {
                path: "/webform",
                element: <WebForm/>
            },
            {
                path: "/setting",
                element: <Setting/>
            },
            {
                path: "/profile",
                element: <Setting/>
            },
            {
                path: "/help",
                element: <Setting/>
            }
        ]
    }
]

export default AppRoutes;
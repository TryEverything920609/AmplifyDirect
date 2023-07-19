import AuthLayout from "./Layouts/AuthLayout";
import LandingPage from './pages/LandingPage';
import Login from './pages/Auth/Login';
import SignUp from "./pages/Auth/SignUp";
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
import Profile from './pages/Services/Profile';
import { Auth } from 'aws-amplify';
import { Hub, Logger } from 'aws-amplify';

const logger = new Logger('My-Logger');

const getData = async() => {
  try {
    await Auth.currentAuthenticatedUser()
      .then((user) => {
        const userEmail = user.attributes.email;
        console.log(userEmail);
      })
      .catch((err) => console.log(err));
    
    
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

const listener = (data) => {
  switch (data.payload.event) {
    case 'configured':
      logger.info('the Auth module is configured');
      break;
    case 'signIn':
      logger.info('user signed in');
      
      break;
    case 'signIn_failure':
      logger.error('user sign in failed');
      break;
    case 'signUp':
      logger.info('user signed up');
      break;
    case 'signUp_failure':
      logger.error('user sign up failed');
      break;
    case 'confirmSignUp':
      logger.info('user confirmation successful');
      break;
    case 'completeNewPassword_failure':
      logger.error('user did not complete new password flow');
      break;
    case 'autoSignIn':
      logger.info('auto sign in successful');
      break;
    case 'autoSignIn_failure':
      logger.error('auto sign in failed');
      break;
    case 'forgotPassword':
      logger.info('password recovery initiated');
      break;
    case 'forgotPassword_failure':
      logger.error('password recovery failed');
      break;
    case 'forgotPasswordSubmit':
      logger.info('password confirmation successful');
      break;
    case 'forgotPasswordSubmit_failure':
      logger.error('password confirmation failed');
      break;
    case 'verify':
      logger.info('TOTP token verification successful');
      break;
    case 'tokenRefresh':
      logger.info('token refresh succeeded');
      break;
    case 'tokenRefresh_failure':
      logger.error('token refresh failed');
      break;
    case 'cognitoHostedUI':
      logger.info('Cognito Hosted UI sign in successful');
      break;
    case 'cognitoHostedUI_failure':
      logger.error('Cognito Hosted UI sign in failed');
      break;
    case 'customOAuthState':
      logger.info('custom state returned from CognitoHosted UI');
      break;
    case 'customState_failure':
      logger.error('custom state failure');
      break;
    case 'parsingCallbackUrl':
      logger.info('Cognito Hosted UI OAuth url parsing initiated');
      break;
    case 'userDeleted':
      logger.info('user deletion successful');
      break;
    case 'updateUserAttributes':
      logger.info('user attributes update successful');
      break;
    case 'updateUserAttributes_failure':
      logger.info('user attributes update failed');
      break;
    case 'signOut':
      logger.info('user signed out');
      break;
  }
};

Hub.listen('auth', listener);

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
                element: <Profile/>
            },
            {
                path: "/help",
                element: <Setting/>
            }
        ]
    }
]

export default AppRoutes;
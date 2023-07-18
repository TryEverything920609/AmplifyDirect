import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import DialerSipOutlinedIcon from '@mui/icons-material/DialerSipOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from 'react-router-dom';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
  } from "@material-tailwind/react";
  
export default function Sidebar(props) {

    const style = props.show ? {'--tw-translate-x': 0} : {};
    return (
      <div style={style} className="bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
        <Card className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    DirectDial System
                </Typography>
            </div>
            <List>
                <Link to="/dashboard">
                    <ListItem >
                        <ListItemPrefix>
                            <GridViewOutlinedIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Dashboard
                    </ListItem>
                </Link>
                
                <Link to="/tollfreenumber">
                    <ListItem>
                        <ListItemPrefix>
                            <PhoneCallbackOutlinedIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Toll Free Number
                    </ListItem>
                </Link>
                
                <Link to="/states">
                    <ListItem>
                        <ListItemPrefix>
                            <CottageOutlinedIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        States
                    </ListItem>
                </Link>
                
                <Link to="/user">
                    <ListItem>
                        <ListItemPrefix>
                            <PersonOutlinedIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Business User
                    </ListItem>
                </Link>
                
                <Link to="/sms">
                    <ListItem>
                        <ListItemPrefix>
                            <TextsmsOutlinedIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        SMS Log
                    </ListItem>
                </Link>     

                <Link to="/call">
                    <ListItem>
                        <ListItemPrefix>
                            <DialerSipOutlinedIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Call Log
                    </ListItem>
                </Link>
                
                <Link to="/billing">
                    <ListItem>
                        <ListItemPrefix>
                            <AttachMoneyOutlinedIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Billing
                    </ListItem>
                </Link>

                <Link to="/webform">
                    <ListItem>
                        <ListItemPrefix>
                            <WebOutlinedIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Web Form
                    </ListItem>
                </Link>
                
                <Link to="/setting">
                    <ListItem>
                        <ListItemPrefix>
                            <SettingsOutlinedIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Setting
                    </ListItem>
                </Link>  
            </List>
        </Card>  
      </div>
      
    );
  }
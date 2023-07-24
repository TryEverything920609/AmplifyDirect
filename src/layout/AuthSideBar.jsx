import { NavLink, useLocation } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import { TbBuildingEstate } from 'react-icons/tb';
import { MdOutlineSms } from'react-icons/md';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { IoSettingsOutline } from 'react-icons/io5';
import { DashboardTwoTone, PhoneTwoTone, UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import logo from '../assets/images/directdial.png';

const AuthSideBar = ({ color }) => {
    const [ collapsed, setCollapsed] = useState(false);
    const { pathname } = useLocation();

    const ADMIN = [
        {key: 1, icon: <DashboardTwoTone />, to: "/dashboard", label: "Dashboard"},
        {key: 2, icon: <PhoneTwoTone />, to: "/tollfreenumber", label: "Toll FreeNumber"},
        {key: 3, icon: <TbBuildingEstate />, to: "/states", label: "States"},
        {key: 4, icon: <UserOutlined />, to:"/businessuser", label: "Business User"},
        {key: 5, icon: <MdOutlineSms />, to:"/sms", label: "SMS Log"},
        {key: 6, icon: <LuPhoneCall />, to:"/call", label: "Call Log"},
        {key: 7, icon: <FaRegMoneyBillAlt />, to: "/billing", label: "Billing"},
        {key: 8, icon: <IoSettingsOutline />, to: "/setting", label: "Setting"}
    ]
    const User = [];
    const SuperVisor = [];

    return (
        <>
            <div className='brand' style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                <img src={logo} alt="" style={{ backgroundColor: "#34A853", padding: '8px 16px', border: '1px solid #34A853', borderRadius: '4px'}}/>
            </div>
            <hr/>
            <Menu theme='light' mode='inline'>
                {ADMIN.map(item =>(
                    <Menu.Item key={item.key}>
                        <NavLink to={item.to}>
                            <span className='icon' style={{background: pathname === item.to? color : ''}}>{item.icon}</span>
                            <span className='label'>{item.label}</span>
                        </NavLink>
                    </Menu.Item>
                ))}
            </Menu>
        </>
    );
}

export default AuthSideBar;
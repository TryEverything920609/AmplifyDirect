import { NavLink, useLocation } from "react-router-dom";
import { Menu, Layout } from "antd";
import { TbBuildingEstate } from "react-icons/tb";
import { MdOutlineSms } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import {
  DashboardTwoTone,
  PhoneTwoTone,
  UserOutlined,
  IdcardTwoTone,
  ControlOutlined,
} from "@ant-design/icons";
import { useEffect, useState, useContext } from "react";
import { DataStore } from "aws-amplify";
import {
  RoleManageList,
  PermissionList,
  PermissionListRoleManageList,
} from "../models";
import AuthContext from "../context/AuthContext";
import logo from "../asset/images/directdial.png";

const AuthSideBar = ({ color }) => {
  const { role, setRole } = useContext(AuthContext);
  const [permissions, setPermissions] = useState([]);
  const [sidebar, setSidebar] = useState([
    {
      key: 1,
      icon: <DashboardTwoTone />,
      to: "/dashboard",
      label: "Dashboard",
    },
  ]);
  const { pathname } = useLocation();
  const ICONS = {
    DashboardTwoTone: <DashboardTwoTone />,
    PhoneTwoTone: <PhoneTwoTone />,
    UserOutlined: <UserOutlined />,
    IdcardTwoTone: <IdcardTwoTone />,
    TbBuildingEstate: <TbBuildingEstate />,
    MdOutlineSms: <MdOutlineSms />,
    FaRegMoneyBillAlt: <FaRegMoneyBillAlt />,
    LuPhoneCall: <LuPhoneCall />,
    IoSettingsOutline: <IoSettingsOutline />,
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("role", role);
      await DataStore.query(RoleManageList, (c) => c.RoleName.eq(role)).then(
        async (roleUser) => {
          console.log("roleuser=>", roleUser);
          await DataStore.query(PermissionListRoleManageList, (c) =>
            c.roleManageListId.eq(roleUser[0].id)
          ).then(async (table) => {
            table.map(async (item) => {
              await DataStore.query(PermissionList, (c) =>
                c.id.eq(item.permissionListId)
              ).then((item) => setPermissions((prev) => [...prev, item[0]]));
            });
          });
        }
      );

      console.log("permissions", permissions);
      const side = [];
      permissions.map((item) => {
        console.log("Item", item);
        side.push({
          key: item.key,
          icon: ICONS[item.icon],
          to: item.to,
          label: item.label,
        });
      });
      const sortside = side.sort((a, b) => a.key - b.key);
      setSidebar(sortside);
    };

    fetchData();
  }, [role]);

  return (
    <>
      <div
        className="brand"
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          alt=""
          style={{
            backgroundColor: "#52c41a",
            padding: "8px 16px",
            border: "1px solid #34A853",
            borderRadius: "4px",
          }}
        />
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        {sidebar.map((item) => (
          <Menu.Item key={item.key}>
            <NavLink to={item.to}>
              <span
                className="icon"
                style={{ background: pathname === item.to ? color : "" }}
              >
                {item.icon}
              </span>
              <span className="label">{item.label}</span>
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default AuthSideBar;

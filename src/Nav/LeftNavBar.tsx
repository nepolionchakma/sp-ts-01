import { FingerprintIcon, GaugeCircle, MenuIcon, X } from "lucide-react";
import { useState } from "react";
import {
  FiDatabase,
  FiDroplet,
  FiFile,
  FiHardDrive,
  FiPlus,
  FiSend,
  FiServer,
  FiTarget,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { NavLink, Outlet } from "react-router-dom";

const LeftNavBar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const navs = [
    {
      id: 1,
      title: "Users Menagement",
      icon: <FiUserPlus className="text-2xl" />,
      cate: [
        {
          id: 1,
          name: "Add User",
          icon: <FiUserPlus className="text-2xl" />,

          link: "/adduser",
        },
        {
          id: 2,
          name: "All User",
          icon: <FiUsers className="text-2xl" />,
          link: "/allusers",
        },
        {
          id: 3,
          name: "Invite User",
          icon: <FiSend className="text-2xl" />,
          link: "/inviteuser",
        },
      ],
    },
    {
      id: 2,
      title: "Employees",
      icon: <FiHardDrive className="text-2xl" />,
      cate: [
        {
          id: 1,
          name: "Add Employee",
          icon: <FiPlus className="text-2xl" />,
          link: "/adddata",
        },
        {
          id: 2,
          name: "All Employee Data",
          icon: <FiFile className="text-2xl" />,
          link: "/employees",
        },
      ],
    },
    {
      id: 3,
      title: "Departments",
      icon: <FiDatabase className="text-2xl" />,
      cate: [
        {
          id: 1,
          name: "Add Department",
          icon: <FiUserPlus className="text-2xl" />,
          link: "/adddepartment",
        },
        {
          id: 2,
          name: "All Department",
          icon: <FiUsers className="text-2xl" />,
          link: "/alldepartment",
        },
        {
          id: 3,
          name: "Master Details 1",
          icon: <FingerprintIcon className="text-2xl" />,
          link: "/masterdetails1",
        },
        {
          id: 4,
          name: "Master Details 2",
          icon: <GaugeCircle className="text-2xl" />,
          link: "/masterdetails2",
        },
        {
          id: 5,
          name: "Master Details 3",
          icon: <FiServer className="text-2xl" />,
          link: "/masterdetails3",
        },
      ],
    },
    {
      id: 4,
      title: "DND",
      icon: <FiDroplet className="text-2xl" />,
      cate: [
        {
          id: 1,
          name: "Todos",
          icon: <FiTarget className="text-2xl" />,
          link: "/todos",
        },
      ],
    },
  ];
  return (
    <div className="flex gap-4 p-4">
      <div className="border h-[85svh]">
        <Sidebar collapsed={collapsed}>
          <div className="flex justify-center">
            <div
              onClick={() => setCollapsed(!collapsed)}
              className="border p-1 rounded my-6 transform hover:rotate-180 duration-500 origin-center"
            >
              {collapsed ? (
                <MenuIcon className="hover:rotate-[360] duration-100" />
              ) : (
                <X className="hover:rotate-[360] duration-100" />
              )}
            </div>
          </div>
          <Menu>
            {navs.map((nav) => (
              <div key={nav.id}>
                <SubMenu label={nav.title} icon={nav.icon}>
                  {nav.cate.map((item, index) => (
                    <MenuItem
                      key={index}
                      component={<NavLink to={item.link} />}
                      icon={item.icon}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </SubMenu>
              </div>
            ))}
          </Menu>
        </Sidebar>
      </div>
      <div className="border w-full p-2">
        <Outlet />
      </div>
    </div>
  );
};
export default LeftNavBar;

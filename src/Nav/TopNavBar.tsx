import {
  Bell,
  ClipboardCheck,
  Home,
  MessageSquare,
  UserCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const TopNavBar = () => {
  const navLinks = [
    { id: 0, name: "Home", link: "/", icon: <Home /> },
    { id: 1, name: "Alert", link: "alert", icon: <Bell /> },
    { id: 2, name: "Tasks", link: "tasks", icon: <ClipboardCheck /> },
    { id: 3, name: "Messages", link: "messages", icon: <MessageSquare /> },
    { id: 4, name: "Profile", link: "profile", icon: <UserCircle /> },
  ];
  return (
    <div className="py-2 px-6 flex justify-between items-center border-b-2 h-[10svh]">
      <div className="w-50">
        <img
          className="w-[9%]"
          src="https://i.ibb.co/kD2P042/Supplier-Portal.jpg"
          alt="image"
        />
      </div>
      <div className="flex gap-7">
        {navLinks.map((nav, i) => (
          <NavLink
            to={nav.link}
            key={i}
            className="cursor-pointer hover:text-green-800"
          >
            {nav.icon}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default TopNavBar;

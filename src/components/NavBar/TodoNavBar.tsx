import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isActive, setIsActive] = useState(0);
  const navLinks = [
    { id: 0, path: "/", name: "All" },
    { id: 1, path: "/?todos=active", name: "Active" },
    { id: 2, path: "/?todos=completed", name: "Completed" },
  ];
  const handleActive = (id: number) => {
    setIsActive(id);
  };
  return (
    <div>
      <nav className="flex gap-40 border-b-2">
        {navLinks.map((nav) => (
          <NavLink
            to={nav.path}
            key={nav.id}
            onClick={() => handleActive(nav.id)}
            className={`duration-500 ${
              isActive === nav.id ? "border-green-600 border-b-2" : "border-b-2"
            }`}
          >
            <label htmlFor="">{nav.name}</label>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
export default NavBar;

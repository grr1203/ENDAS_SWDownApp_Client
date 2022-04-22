import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import style from "../css/components/Navigator.module.scss";

function Navigator() {
  return (
    <div className={style.nav}>
      <Link to="/">
        <img
          className={style.nav__logo}
          src={process.env.PUBLIC_URL + "/img/ENDAS_Logo.png"}
          alt="logo"
        />
      </Link>
      <ul className={style.menu}>
        {menuItems.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </ul>
      {/* temp */}
      <Link to="/login" style={{ textDecoration: "none" }}>
        　
      </Link>
    </div>
  );
}

const menuItems = [
  {
    title: "NVR",
    submenus: [
      { title: "CL", route: "/products/CL" },
      { title: "CEL", route: "/products/CEL" },
      { title: "ARCA", route: "/products/ARCA" },
    ],
  },
  {
    title: "Camera",
    route: "/products/Camera",
  },
  {
    title: "Client",
    submenus: [{ title: "Bona", route: "/products/Bona" }],
  },
];

function MenuItem({ item }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li
      className={style.menu__item}
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      {item.submenus ? (
        <>
          <Link to="#">{item.title}</Link>
          <Dropdown items={item.submenus} show={dropdown} />
        </>
      ) : (
        <Link to={item.route}>{item.title}</Link>
      )}
    </li>
  );
}

export default Navigator;

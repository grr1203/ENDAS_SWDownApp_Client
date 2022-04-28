import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import axios from "axios";
import style from "../css/components/Navigator.module.scss";

function Navigator() {
  const [login, setlogin] = useState(localStorage.getItem("login"));

  const logout = async () => {
    const res = await axios({
      method: "post",
      url: process.env.REACT_APP_SERVER_URL + "/api/logout",
    });
    if (res.status !== 200) return;

    localStorage.removeItem("login");
    setlogin(false);
    window.location.reload();
  };

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
      {login ? (
        <div className={style.login} onClick={logout}>
          Logout
        </div>
      ) : (
        <Link to="/login" className={style.login}>
          Login
        </Link>
      )}
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
      { title: "Streaming Server", route: "/products/StreamingServer" },
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
          <Link className={style.menu__item__title} to="#">
            {item.title}
          </Link>
          <Dropdown items={item.submenus} show={dropdown} />
        </>
      ) : (
        <Link className={style.menu__item__title} to={item.route}>
          {item.title}
        </Link>
      )}
    </li>
  );
}

export default Navigator;

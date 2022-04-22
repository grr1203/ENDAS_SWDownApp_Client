import { Link } from "react-router-dom";
import style from "../css/components/Dropdown.module.css";

function Dropdown({ items, show }) {
  return (
    <div className={`${style.dropdown} ${show ? style.show : ""}`}>
      {items.map((item, index) => (
        <Link to={item.route} key={index}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default Dropdown;

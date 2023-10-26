import "./sidebar.scss";
import logo from "../../../assets/Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCartShopping,
  faCircleHalfStroke,
  faCube,
  faGaugeHigh,
  faGear,
  faRegistered,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  faAutoprefixer,
  faBandcamp,
  faJediOrder,
  faProductHunt,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";


const Sidebar = () => {

  const {t} =useTranslation()
  return (
    <div className="Sidebar_Container">
      <div className="Sidebar_Logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <p className="Title">
        {t("Menu")}
      </p>

      <ul className="menu-list">

        <li className="menu-list__item">

          <Link  to="Categories" className="menu-list__link">
            <FontAwesomeIcon icon={faGaugeHigh} className="menu-list__icon" />
            {t("categories")}
          </Link>

        </li>

        <li className="menu-list__item">

          <Link  to ="SubCategories" className="menu-list__link">
            <FontAwesomeIcon icon={faCircleHalfStroke} className="menu-list__icon" />
            {t("subcategories")}
          </Link>

        </li>


        <li className="menu-list__item">

        <Link to="Brands"  className="menu-list__link">
          <FontAwesomeIcon icon={faBandcamp} className="menu-list__icon" />
          {t("Brands")}
        </Link>

        </li>


        <li className="menu-list__item">

          <Link to="Products"  className="menu-list__link">
            <FontAwesomeIcon icon={faProductHunt} className="menu-list__icon" />
            {t("products")}
          </Link>
        </li>


        <li className="menu-list__item">

          <Link to="Coupons" className="menu-list__link">
            <FontAwesomeIcon icon={faCube} className="menu-list__icon" />
            {t("coupons")}

           
          </Link>

        </li>



          <li className="menu-list__item">

          <Link to="Orders" className="menu-list__link">
            <FontAwesomeIcon icon={faJediOrder} className="menu-list__icon" />
            {t("orders")}

          </Link>

          </li>



        <li className="menu-list__item">

        <Link to="Settings" className="menu-list__link">
          <FontAwesomeIcon icon={faGear} className="menu-list__icon" />
          {t("settings")}

        </Link>

          </li>


        <li className="menu-list__item">

        <Link  to="Users" className="menu-list__link">
          <FontAwesomeIcon icon={faUser} className="menu-list__icon" />
          {t("user data")}

        </Link>

        </li>
        
       <li className="menu-list__item">

        <Link to="Reviews" className="menu-list__link">
          <FontAwesomeIcon icon={faRegistered} className="menu-list__icon" />
          {t("Reviews")}
        </Link>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;

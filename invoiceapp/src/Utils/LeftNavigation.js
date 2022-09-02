import { NavLink } from "react-router-dom";
import { ENTITY } from "./Constants";

const LeftNavigation = () => {
  return (
    <div className="header">
      <nav className="nav-menu1 active1">
        <div>
          <NavLink className="navlink-class" to="/customer">
            <div className="left-nav-text" id="left-nav-id">
              <i className="fa fa-user"></i>
              <span>{ENTITY.CUSTOMER_ENTITY}</span>
            </div>
          </NavLink>

          <NavLink className="navlink-class" to="/item">
            <div className="left-nav-text">
              <i className="fa fa-star"></i>
              <span>{ENTITY.ITEM_ENTITY}</span>
            </div>
          </NavLink>

          <NavLink className="navlink-class" to="/invoice">
            <div className="left-nav-text">
              <i className="fa fa-file"></i>
              <span>{ENTITY.INVOICE_ENTITY}</span>
            </div>
          </NavLink>

          <NavLink className="navlink-class" to="/dashboard">
            <div className="left-nav-text">
              <i className="fa fa-tachometer"></i>
              <span>{ENTITY.DASHBOARD_ENTITY}</span>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftNavigation;

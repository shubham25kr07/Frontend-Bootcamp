import { Outlet, Link } from "react-router-dom";
import { ENTITY } from "./Constants";

const LeftNavigation = () => {
  return (
    <div className="header">
      <nav className="nav-menu active">
        <ul className="nav-menu-items">
          {/* <li className="nav-text active">
            <Link to="/">
              <i className="fa fa-user"></i>
              <span>HOME</span>
            </Link>
          </li> */}
          <li className="nav-text active">
            <Link to="/customer">
              <i className="fa fa-user"></i>
              <span>{ENTITY.CUSTOMER_ENTITY}</span>
            </Link>
          </li>
          <li className="nav-text active">
            <Link to="/item">
              <i className="fa fa-star"></i>
              <span>{ENTITY.ITEM_ENTITY}</span>
            </Link>
          </li>
          <li className="nav-text active">
            <Link to="/invoice">
              <i className="fa fa-file"></i>
              <span>{ENTITY.INVOICE_ENTITY}</span>
            </Link>
          </li>
          <li className="nav-text active">
            <Link to="#">
              <i className="fa fa-tachometer"></i>
              <span>{ENTITY.DASHBOARD_ENTITY}</span>
            </Link>
          </li>
        </ul>
      </nav>
      {/* <button
          className="nav-button"
          onClick={changeType}
          value={ENTITY.CUSTOMER_ENTITY}
        >
          <i class="fa fa-user"></i>
          Customer
        </button>
        <button
          className="nav-button"
          onClick={changeType}
          value={ENTITY.ITEM_ENTITY}
        >
          <i class="fa fa-star"></i>
          Item
        </button>
        <button
          className="nav-button"
          onClick={changeType}
          value={ENTITY.INVOICE_ENTITY}
        >
          <i class="fa fa-file"></i>
          Invoice
        </button>
        <button
          className="nav-button"
          onClick={changeType}
          value={ENTITY.DASHBOARD_ENTITY}
        >
          <i className="fa fa-tachometer"></i>
          Dashboard
        </button> */}
    </div>
  );
};

export default LeftNavigation;

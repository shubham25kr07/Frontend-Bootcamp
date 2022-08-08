import { ENTITY } from "./Constants";

const LeftNavigation = (props) => {
  const { setEntityType } = props;
  const changeType = (e) => {
    setEntityType(e.target.value);
  };
  return (
    <div className="header">
      <div className="unstyled list-hover-slide">
        <button
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
        </button>
      </div>
    </div>
  );
};

export default LeftNavigation;

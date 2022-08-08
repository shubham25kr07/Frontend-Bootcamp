import ENTITY from "./Constants";

const LeftNavigation = (props) => {
  const { setEntityType } = props;
  const changeType = (e) => {
    setEntityType(e.target.value);
  };
  return (
    <div className="header">
      <div id="mySidenav" className="unstyled list-hover-slide">
        <button onClick={changeType} value={ENTITY.CUSTOMER_ENTITY}>
          Customer
        </button>
        <button onClick={changeType} value={ENTITY.ITEM_ENTITY}>
          Item
        </button>
        <button onClick={changeType} value={ENTITY.INVOICE_ENTITY}>
          Invoice
        </button>
        <button onClick={changeType} value={ENTITY.DASHBOARD_ENTITY}>
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default LeftNavigation;

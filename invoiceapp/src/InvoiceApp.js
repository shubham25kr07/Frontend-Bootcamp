import { useState } from "react";
import Customer from "./components/Customer";
import Dashboard from "./components/Dashboard";
import Invoice from "./components/Invoice";
import Item from "./components/Items";
import { ENTITY } from "./Utils/Constants";
import LeftNavigation from "./Utils/LeftNavigation";

const changeEntityType = (entityType) => {
  switch (entityType) {
    case ENTITY.CUSTOMER_ENTITY:
      return <Customer />;
      break;
    case ENTITY.ITEM_ENTITY:
      return <Item />;
      break;
    case ENTITY.INVOICE_ENTITY:
      return <Invoice />;
      break;
    case ENTITY.DASHBOARD_ENTITY:
      return <Dashboard />;
      break;
  }
};
const InvoiceApp = () => {
  const [entityType, setEntityType] = useState(ENTITY.CUSTOMER_ENTITY);

  return (
    <div>
      <LeftNavigation setEntityType={setEntityType} />
      {changeEntityType(entityType)}
    </div>
  );
};

export default InvoiceApp;

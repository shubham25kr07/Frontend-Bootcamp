import { useState } from "react";
import Customer from "./components/Customer";
import Dashboard from "./components/Dashboard";
import Invoice from "./components/Invoice";
import Item from "./components/Items";
import { ENTITY } from "./Utils/Constants";
import LeftNavigation from "./Utils/LeftNavigation";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import CustomerForm from "./components/CustomerForm";
import ItemForm from "./components/ItemForm";
import Home from "./components/Home";

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
  const [entityType, setEntityType] = useState(ENTITY.ITEM_ENTITY);

  return (
    <div>
      <BrowserRouter>
        <LeftNavigation />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route path="/customer" element={<Customer />} />
          <Route path="/item" element={<Item />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default InvoiceApp;

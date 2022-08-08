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

const InvoiceApp = () => {
  return (
    <div>
      <BrowserRouter>
        <LeftNavigation />
        <Routes>
          <Route path="/customer" element={<Customer />} />
          <Route path="/customer/add" element={<CustomerForm />} />
          <Route path="/item" element={<Item />} />
          <Route path="/item/add" element={<ItemForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default InvoiceApp;

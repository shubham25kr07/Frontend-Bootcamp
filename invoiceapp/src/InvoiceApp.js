import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LeftNavigation from "./utils/LeftNavigation";

const Customer = lazy(() => import("./components/Customer"));
const Item = lazy(() => import("./components/Items"));
const Invoice = lazy(() => import("./components/Invoice"));
const CustomerForm = lazy(() => import("./components/CustomerForm"));
const ItemForm = lazy(() => import("./components/ItemForm"));
const InvoiceForm = lazy(() => import("./components/InvoiceForm"));

const InvoiceApp = () => {
  return (
    <div>
      <BrowserRouter>
        <LeftNavigation />
        <Suspense fallback={<h1>Loadding Please Wait ... </h1>}>
          <Routes>
            <Route path="/customer" element={<Customer />} />
            <Route path="/customer/add" element={<CustomerForm />} />
            <Route path="/item" element={<Item />} />
            <Route path="/item/add" element={<ItemForm />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/invoice/add" element={<InvoiceForm />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default InvoiceApp;

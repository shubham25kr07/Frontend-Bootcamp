import { lazy, Suspense } from "react";
import LeftNavigation from "./Utils/LeftNavigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const LazyCustomer = lazy(() => import("./components/Customer"));
const LazyItem = lazy(() => import("./components/Items"));
const LazyInvoice = lazy(() => import("./components/Invoice"));
const LazyCustomerForm = lazy(() => import("./components/CustomerForm"));
const LazyItemForm = lazy(() => import("./components/ItemForm"));

const InvoiceApp = () => {
  return (
    <div>
      {/* Hello
      <Home /> */}
      <BrowserRouter>
        <LeftNavigation />
        <Suspense fallback={<h1>Loadding Please Wait ... </h1>}>
          <Routes>
            <Route path="/customer" element={<LazyCustomer />} />
            <Route path="/customer/add" element={<LazyCustomerForm />} />
            <Route path="/item" element={<LazyItem />} />
            <Route path="/item/add" element={<LazyItemForm />} />
            <Route path="/invoice" element={<LazyInvoice />} />
            <Route path="/invoice/add" element={<LazyInvoice />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default InvoiceApp;

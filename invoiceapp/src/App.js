import InvoiceApp from "./InvoiceApp";
import { createContext, useState } from "react";
export const entityDetails = createContext();
function App() {
  const [customerList, setCustomerList] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [invoiceList, setInvoiceList] = useState([]);
  const propsValue = {
    customerList,
    setCustomerList,
    itemList,
    setItemList,
    invoiceList,
    setInvoiceList,
  };
  return (
    <div>
      <entityDetails.Provider value={propsValue}>
        <InvoiceApp />
      </entityDetails.Provider>
    </div>
  );
}

export default App;

import InvoiceApp from "./InvoiceApp";
import { createContext, useState } from "react";
export const EntityDetailsContext = createContext();
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
      <EntityDetailsContext.Provider value={propsValue}>
        <InvoiceApp />
      </EntityDetailsContext.Provider>
    </div>
  );
}

export default App;

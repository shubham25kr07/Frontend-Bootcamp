import InvoiceApp from "./InvoiceApp";
import { createContext, useEffect, useState } from "react";
import { getCustomerList } from "./apis/customer";
import { getItemList } from "./apis/item";
import { getInvoiceList } from "./apis/invoice";

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

  useEffect(() => {
    async function fetchData() {
      const customerData = await getCustomerList(1);
      const itemData = await getItemList(1);
      const invoiceData = await getInvoiceList();
      setCustomerList(customerData);
      setInvoiceList(invoiceData);
      setItemList(itemData);
    }
    fetchData();
  }, []);
  return (
    <div>
      <EntityDetailsContext.Provider value={propsValue}>
        <InvoiceApp />
      </EntityDetailsContext.Provider>
    </div>
  );
}

export default App;

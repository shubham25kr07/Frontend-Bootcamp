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
  const [customerTotalPages, setcustomerTotalPages] = useState(0);
  const fetchCustomers = async (page = 1) => {
    const data = {
      sort_key: "name",
      sort_value: "ASC",
    };
    const json = await getCustomerList(page, data);
    setCustomerList(json.customer);
    setcustomerTotalPages(parseInt((Number(json.total_rows) + 10) / 10));
  };
  const fetchItems = async (page = 1) => {
    const data = {
      sort_key: "item_name",
      sort_value: "ASC",
    };
    const itemData = await getItemList(page, data);
    setItemList(itemData);
  };
  const fetchInvoice = async () => {
    const invoiceData = await getInvoiceList();
    setInvoiceList(invoiceData);
  };

  const propsValue = {
    customerList,

    itemList,
    setItemList,
    invoiceList,
    setInvoiceList,
    fetchCustomers,
    fetchItems,
    fetchInvoice,
    customerTotalPages,
  };

  useEffect(() => {
    // async function fetchData() {
    //   const customerData = await getCustomerList(1);
    //   const itemData = await getItemList(1);
    //   const invoiceData = await getInvoiceList();
    //   setCustomerList(customerData);
    //   setInvoiceList(invoiceData);
    //   setItemList(itemData);
    // }
    // fetchData();
    fetchCustomers();
    fetchItems();
    fetchInvoice();
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

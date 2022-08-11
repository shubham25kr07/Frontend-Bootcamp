import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { EntityDetailsContext } from "../App";
import Table from "../Utils/Table";
import { INVOICE_COLUMN } from "../Utils/Constants";
const Invoice = () => {
  const { invoiceList, setInvoiceList } = useContext(EntityDetailsContext);
  const pagination = false;
  useEffect(() => {
    const url = "http://localhost:8080/v1/invoice/list";
    callAPI(url);
  }, []);

  const callAPI = (url) => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setInvoiceList(json);
      });
  };

  return (
    <div className="table-form">
      <div class="customers-addcustomer ">
        <h1>Invoice</h1>
        <Link to="/invoice/add" className="add-button">
          <i class="fa fa-plus"></i>
          Add Invoice
        </Link>
      </div>
      <Table
        column={INVOICE_COLUMN}
        datalist={invoiceList}
        pagination={pagination}
      />
    </div>
  );
};
export default Invoice;

import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { EntityDetailsContext } from "../App";
import Table from "../Utils/Table";
import { INVOICE_COLUMN } from "../Utils/Constants";
const Invoice = () => {
  const { invoiceList, setInvoiceList } = useContext(EntityDetailsContext);
  const pagination = false;
  return (
    <div>
      {invoiceList.length > 0 ? (
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
      ) : (
        <div className="empty-invoice-list">
          <div className="empty-box">
            <div className="empty-box-text">NO Invoices</div>
            <Link to="/invoice/add" className="add-button">
              <i class="fa fa-plus"></i>
              Add Invoice
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Invoice;

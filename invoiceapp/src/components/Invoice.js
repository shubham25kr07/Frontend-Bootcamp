import { useContext } from "react";
import { Link } from "react-router-dom";

import { EntityDetailsContext } from "../App";
import Table from "../utils/Table";
import { INVOICE_COLUMN } from "../utils/Constants";
import AddBox from "../utils/AddBox";
const Invoice = () => {
  const { invoiceList } = useContext(EntityDetailsContext);
  console.log(invoiceList);

  return (
    <div>
      {invoiceList && invoiceList.length > 0 ? (
        <div className="table-form">
          <div class="title-button ">
            <h1 data-testid="invoice-element">Invoice</h1>
            <Link to="/invoice/add" className="add-button">
              <i class="fa fa-plus"></i>
              Add Invoice
            </Link>
          </div>
          <Table
            column={INVOICE_COLUMN}
            datalist={invoiceList}
            pagination={false}
          />
        </div>
      ) : (
        <AddBox value="Invoice" link="/invoice/add" />
      )}
    </div>
  );
};
export default Invoice;

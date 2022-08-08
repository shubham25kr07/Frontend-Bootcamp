import { getByLabelText } from "@testing-library/dom";
import { useEffect, useState, useContext } from "react";
import { ENTITY, CUSTOMER_COLUMN } from "../Utils/Constants";
import Table from "../Utils/Table";
import CustomerForm from "./CustomerForm";
import { entityDetails } from "../App";

const CUSTOMER_ENTITY = ENTITY.CUSTOMER_ENTITY;

const Customer = () => {
  const { customerList, setCustomerList } = useContext(entityDetails);

  const [flag, setFlag] = useState(true);

  useEffect(() => {
    // call customer get method in order to get the customerlist
    callAPI();
  }, []);

  const callAPI = () => {
    const data = JSON.parse(localStorage.getItem(CUSTOMER_ENTITY)) || [];

    setCustomerList(data);
  };

  const showTable = () => {
    setFlag(!flag);
  };

  return (
    <div>
      {flag ? (
        <div className="table-form">
          <div class="customers-addcustomer">
            <h1>Customers</h1>
            <button type="button" className="add-button" onClick={showTable}>
              <i class="fa fa-plus"></i>
              Add Customer
            </button>
          </div>
          <Table column={CUSTOMER_COLUMN} datalist={customerList} />
        </div>
      ) : (
        <div className="table-form">
          <button type="button" onClick={showTable}>
            Customer List
          </button>
          <CustomerForm setFlag={setFlag} />
        </div>
      )}
    </div>
  );
};
export default Customer;

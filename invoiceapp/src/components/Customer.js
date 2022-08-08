import { getByLabelText } from "@testing-library/dom";
import { useEffect, useState } from "react";
import { ENTITY, CUSTOMER_COLUMN } from "../Utils/Constants";
import Table from "../Utils/Table";
import CustomerForm from "./CustomerForm";

const CUSTOMER_ENTITY = ENTITY.CUSTOMER_ENTITY;

const Customer = () => {
  const [customerList, setCustomerList] = useState([]);
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
        <div>
          <button type="button" onClick={showTable}>
            Add Customer
          </button>
          <Table column={CUSTOMER_COLUMN} datalist={customerList} />
        </div>
      ) : (
        <div>
          <button type="button" onClick={showTable}>
            Customer List
          </button>
          <CustomerForm
            setCustomerList={setCustomerList}
            customerList={customerList}
            setFlag={setFlag}
          />
        </div>
      )}
    </div>
  );
};
export default Customer;

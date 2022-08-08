import { getByLabelText } from "@testing-library/dom";
import { useEffect, useState, useContext } from "react";
import { ENTITY, CUSTOMER_COLUMN } from "../Utils/Constants";
import Table from "../Utils/Table";
import { entityDetails } from "../App";
import { Link } from "react-router-dom";

const CUSTOMER_ENTITY = ENTITY.CUSTOMER_ENTITY;

const Customer = () => {
  const { customerList, setCustomerList } = useContext(entityDetails);

  useEffect(() => {
    // call customer get method in order to get the customerlist
    callAPI();
  }, []);

  const callAPI = () => {
    const data = JSON.parse(localStorage.getItem(CUSTOMER_ENTITY)) || [];

    setCustomerList(data);
  };

  return (
    <div>
      <div className="table-form">
        <div class="customers-addcustomer ">
          <h1>Customers</h1>
          <Link to="/customer/add" className="add-button">
            <i class="fa fa-plus"></i>
            Add Customer
          </Link>
        </div>
        <Table column={CUSTOMER_COLUMN} datalist={customerList} />
      </div>
    </div>
  );
};
export default Customer;

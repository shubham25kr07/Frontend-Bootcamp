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
    const url = "http://localhost:8080/v1/customer/customerList?page=1";
    const data = {
      sort_key: "name",
      sort_value: "ASC",
    };
    callAPI(url, data);
  }, []);

  const callAPI = (url, data) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => setCustomerList(json.customer));
  };

  return (
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
  );
};
export default Customer;

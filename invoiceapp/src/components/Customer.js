import { useEffect, useContext, useState } from "react";
import { CUSTOMER_COLUMN } from "../Utils/Constants";
import Table from "../Utils/Table";
import { EntityDetailsContext } from "../App";
import { Link } from "react-router-dom";

const Customer = () => {
  const { customerList, setCustomerList } = useContext(EntityDetailsContext);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const url = `http://localhost:8080/v1/customer/customerList?page=${currentPage}`;
    const data = {
      sort_key: "name",
      sort_value: "ASC",
    };
    callAPI(url, data);
  }, [currentPage]);

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
      <Table
        column={CUSTOMER_COLUMN}
        datalist={customerList}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
export default Customer;

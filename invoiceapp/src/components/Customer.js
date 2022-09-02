import { useEffect, useContext, useState } from "react";
import { CUSTOMER_COLUMN } from "../utils/Constants";
import Table from "../utils/Table";
import { EntityDetailsContext } from "../App";
import { Link } from "react-router-dom";
import AddBox from "../utils/AddBox";

const Customer = () => {
  const { customerList, fetchCustomers } = useContext(EntityDetailsContext);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchCustomers(currentPage);
  }, [currentPage, fetchCustomers]);

  return (
    <div>
      {customerList && customerList.length > 0 ? (
        <div className="table-form">
          <div class="customers-addcustomer ">
            <h1 data-testid="custom-element">Customers</h1>

            <Link to="/customer/add" className="add-button">
              <i class="fa fa-plus"></i>
              Add Customer
            </Link>
          </div>
          <Table
            column={CUSTOMER_COLUMN}
            datalist={customerList}
            setCurrentPage={setCurrentPage}
            onPageChange={currentPage}
          />
        </div>
      ) : (
        <AddBox value="Customer" link="/customer/add" />
      )}
    </div>
  );
};
export default Customer;

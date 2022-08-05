import { getByLabelText } from "@testing-library/dom";
import { useEffect, useState } from "react";
import Table from "../Utils/Table";
const Customer = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    // call customer get method in order to get the customerlist
    callAPI();
  }, []);

  const callAPI = () => {
    const data = JSON.parse(localStorage.getItem("data")) || [
      {
        name: "shubham",
        phone_number: "1234",
        email: "sk@gmail.com",
        created_at: "05-02-2022",
      },
      {
        name: "pradeep",
        phone_number: "1234",
        email: "pk@gmail.com",
        created_at: "05-02-2022",
      },
    ];

    setCustomerList(data);
  };

  const column = () => {
    return [
      {
        title: "NAME",
        render: (rowData) => {
          return <span>{rowData.name}</span>;
        },
      },
      {
        title: "EMAIL",
        render: (rowData) => {
          return <span>{rowData.email}</span>;
        },
      },
      {
        title: "PHONE NUMBER",
        render: (rowData) => {
          return <span>{rowData.phone_number}</span>;
        },
      },
      {
        title: "CREATED ON",
        render: (rowData) => {
          return <span>{rowData.created_at}</span>;
        },
      },
    ];
  };

  return (
    <div>
      {/* call form component */}
      <Table column={column()} datalist={customerList} />
    </div>
  );
};
export default Customer;

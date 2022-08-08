import { useState, useContext } from "react";
import { entityDetails } from "../App";
import { ENTITY } from "../Utils/Constants";
import FormInput from "../Utils/FormInput";
import { useNavigate } from "react-router-dom";
const CUSTOMER_ENTITY = ENTITY.CUSTOMER_ENTITY;
const CustomerForm = () => {
  const { customerList, setCustomerList } = useContext(entityDetails);
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const { name, email, phoneNumber } = inputValue;

  const handleChange = (type, e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [type]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    //Call Post Api for Customer Form
    event.preventDefault();

    let newArray = [...customerList, inputValue];
    localStorage.setItem(CUSTOMER_ENTITY, JSON.stringify(newArray));
    setCustomerList(newArray);
    navigate("/customer");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">Add Customer</div>
        <div className="input-container ic1">
          <FormInput
            type="text"
            value={name}
            placeholder="Customer Name"
            label="Name"
            name="name"
            onChange={handleChange.bind(null, "name")}
          />
          <FormInput
            type="text"
            value={email}
            placeholder="Email"
            label="email"
            name="email"
            onChange={handleChange.bind(null, "email")}
          />
        </div>
        <div className="input-container">
          <FormInput
            type="text"
            value={phoneNumber}
            placeholder="Phone Number"
            label="phoneNumber"
            name="phoneNumber"
            onChange={handleChange.bind(null, "phoneNumber")}
          />
          <button className="submit">Submit Form</button>
        </div>
      </form>
    </div>
  );
};
export default CustomerForm;

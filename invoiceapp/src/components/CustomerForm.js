import { useState } from "react";
import ENTITY from "../Utils/Constants";
import FormInput from "../Utils/FormInput";

const CustomerForm = (props) => {
  const CUSTOMER_ENTITY = ENTITY.CUSTOMER_ENTITY;
  const { setFlag, setCustomerList } = props;
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

  const handleSubmit = (event) => {
    //Call Post Api for Customer Form
    event.preventDefault();
    var x = [inputValue];
    var array = JSON.parse(localStorage.getItem(CUSTOMER_ENTITY)) || [];

    let newArray = [...array, ...x];
    localStorage.setItem(CUSTOMER_ENTITY, JSON.stringify(newArray));

    array = JSON.parse(localStorage.getItem(CUSTOMER_ENTITY));
    setCustomerList(array);
    setFlag(1);
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
        </div>
        <div className="input-container ic2">
          <FormInput
            type="text"
            value={email}
            placeholder="Email"
            label="email"
            name="email"
            onChange={handleChange.bind(null, "email")}
          />
        </div>
        <div className="input-container ic2">
          <FormInput
            type="text"
            value={phoneNumber}
            placeholder="Phone Number"
            label="phoneNumber"
            name="phoneNumber"
            onChange={handleChange.bind(null, "phoneNumber")}
          />
        </div>
        <button className="submit">Submit Form</button>
      </form>
    </div>
  );
};
export default CustomerForm;

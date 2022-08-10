import { useEffect, useState } from "react";
import FormInput from "../Utils/FormInput";
import { useNavigate } from "react-router-dom";

const CustomerForm = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone_number: "",
  });
  const navigate = useNavigate();
  const { name, email, phone_number } = inputValue;
  const url = "http://localhost:8080/v1/customer/add";

  const handleChange = (type, e) => {
    const { value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      body: JSON.stringify(inputValue),
    })
      .then(async (response) => {
        const x = await response.json();
        console.log(x, response);
        // return x;
        if (response.status !== 200) {
          throw new Error(x.message);
        } else {
          return x;
        }
      })
      .then((json) => {
        alert("Customer Added Successfully");
        navigate("/customer");
      })
      .catch((error) => {
        console.table(error);
      });
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
            value={phone_number}
            placeholder="Phone Number"
            label="phoneNumber"
            name="phoneNumber"
            onChange={handleChange.bind(null, "phone_number")}
          />
          <button className="submit">Submit Form</button>
        </div>
      </form>
    </div>
  );
};
export default CustomerForm;

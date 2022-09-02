import { useState } from "react";
import FormInput from "../utils/FormInput";
import { useNavigate } from "react-router-dom";
import Errors from "../utils/Errors";
import { addCustomer } from "../apis/customer";

const CustomerForm = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone_number: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone_number: "",
    email: "",
  });
  const [isDisabled, setDisabled] = useState(true);

  const navigate = useNavigate();
  const { name, email, phone_number } = inputValue;

  const checkFields = (type, value) => {
    const tempInputValue = inputValue;

    inputValue[type] = value;
    console.log(inputValue, tempInputValue);
    if (inputValue.name && inputValue.email && inputValue.phone_number) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (type, e) => {
    const { value } = e.target;
    checkFields(type, value);
    console.log(errors);
    if (type === "email") {
      console.log("hello");
      if (!isValidEmail(value)) {
        // setError('Email is invalid');
        console.log(isValidEmail(value));
        console.log(value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          [type]: ` *${type} is invalid`,
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [type]: "" }));
      }
    }
    if (errors[type] === ` *${type} is a Required`) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [type]: "",
      }));
    }
    setInputValue((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleBlur = (type, e) => {
    const { value } = e.target;

    if (value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [type]: ` *${type} is a Required`,
      }));
    } else if (errors[type] === ` *${type} is a Required`) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [type]: "",
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (errors.email || errors.name || errors.phone_number) {
      alert("Form Entries are not valid");
      return;
    }
    const addData = async () => {
      const response = await addCustomer(inputValue);
      const x = response.json();
      if (response.status !== 200) {
        throw new Error(x.message);
      } else {
        alert("Customer Added Successfully");
        navigate("/customer");
      }
    };
    addData();
  };

  return (
    <div className="form-container">
      <div className="title">New Customer</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container customer-input-container">
          <div className="lable-input">
            <FormInput
              testId={"name"}
              type="text"
              value={name}
              placeholder="Customer Name"
              label="Name"
              name="name"
              onChange={handleChange.bind(null, "name")}
              onBlur={handleBlur.bind(null, "name")} //change the name of handleBlur
            />
            <Errors value={errors.name} />
          </div>
          <div className="lable-input  ic1">
            <FormInput
              type="number"
              testId={"phone"}
              value={phone_number}
              placeholder="Phone Number"
              label="Phone"
              name="phoneNumber"
              onChange={handleChange.bind(null, "phone_number")}
              onBlur={handleBlur.bind(null, "phone_number")} //change the name of handleBlur
            />
            <Errors value={errors.phone_number} />
          </div>
        </div>
        <div className="input-container customer-input-container">
          <div className="lable-input">
            <FormInput
              testId={"email"}
              type="text"
              value={email}
              placeholder="Email"
              label="Email"
              name="email"
              onChange={handleChange.bind(null, "email")}
              onBlur={handleBlur.bind(null, "email")} //change the name of handleBlur
            />
            <Errors value={errors.email} />
          </div>
          <div className="lable-input  ic1">
            <button
              className={
                isDisabled
                  ? "disabled-customer-button"
                  : "submit-customer-button"
              }
              disabled={isDisabled}
            >
              <i className="fa fa-file"></i>Save Customer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CustomerForm;

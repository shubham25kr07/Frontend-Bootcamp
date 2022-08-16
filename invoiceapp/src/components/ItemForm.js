import { useState } from "react";
import FormInput from "../Utils/FormInput";
import { useNavigate } from "react-router-dom";

const ItemForm = () => {
  const [inputValue, setInputValue] = useState({
    Item_Name: "",
    Item_Description: "",
    Price: "",
  });
  const [errors, setErrors] = useState({
    Item_Name: "",
    Description: "",
    Price: null,
  });
  const { Item_Name, Item_Description, Price } = inputValue;
  const navigate = useNavigate();
  const url = "http://localhost:8080/v1/item/add";

  const handleChange = (type, e) => {
    const { value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleBlur = (type, e) => {
    const { value } = e.target;
    console.log("handleBlur");
    if (value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [type]: ` *${type} is a Required`,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [type]: "",
      }));
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(url, {
      method: "POST",
      body: JSON.stringify(inputValue),
    }).then((response) => response.json());

    // alert("Item Added Successfully");
    navigate("/item");
  };

  return (
    <div className="form-container">
      <div className="title">New Item</div>
      <form className="form item-form" onSubmit={handleSubmit}>
        <div className="input-container label-and-error">
          <div className="lable-input ">
            <FormInput
              type="text"
              value={Item_Name}
              label="Name"
              name="name"
              onChange={handleChange.bind(null, "Item_Name")}
              onBlur={handleBlur.bind(null, "Name")} //change the name of handleBlur
            />
            {errors.Name && <div className="error">{errors.Name}</div>}
          </div>
        </div>
        <div className="input-container label-and-error">
          <div className="lable-input">
            <FormInput
              type="text"
              value={Price}
              label="Price"
              name="price"
              onChange={handleChange.bind(null, "Price")}
              onBlur={handleBlur.bind(null, "Price")}
            />
            {errors.Price && <div className="error">{errors.Price}</div>}
          </div>
        </div>
        <div className="input-container label-and-error">
          <div className="lable-input">
            <FormInput
              className={"description"}
              label="Description"
              id="Item_Description"
              name="Item_Description"
              type="Item_Description"
              value={Item_Description}
              onChange={handleChange.bind(null, "Item_Description")}
              onBlur={handleBlur.bind(null, "Description")}
            />
            {errors.Description && (
              <div className="error">{errors.Description}</div>
            )}
          </div>
        </div>
        <button className="submit">
          {" "}
          <i className="fa fa-file"></i>Save Item
        </button>
      </form>
    </div>
  );
};
export default ItemForm;

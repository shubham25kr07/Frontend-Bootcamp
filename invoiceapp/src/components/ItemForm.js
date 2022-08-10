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
    Item_Description: "",
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
        [type]: "Required",
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
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">Add Item</div>
        <div className="input-container ic1">
          <FormInput
            type="text"
            value={Item_Name}
            placeholder="Item Name"
            label="Name"
            name="name"
            onChange={handleChange.bind(null, "Item_Name")}
            onBlur={handleBlur.bind(null, "Item_Name")}
          />
          {errors.Item_Name && (
            <div>
              <h1>{errors.Item_Name}</h1>
            </div>
          )}
        </div>
        <div className="input-container ic2">
          <FormInput
            type="text"
            value={Price}
            placeholder="Price"
            label="price"
            name="price"
            onChange={handleChange.bind(null, "Price")}
            onBlur={handleBlur.bind(null, "Price")}
          />
          {errors.Price && (
            <div>
              <h1>{errors.Price}</h1>
            </div>
          )}
        </div>

        <div className="input-container ic2">
          <FormInput
            placeholder="Price"
            label="price"
            id="Item_Description"
            name="Item_Description"
            type="Item_Description"
            value={Item_Description}
            onChange={handleChange.bind(null, "Item_Description")}
            onBlur={handleBlur.bind(null, "Item_Description")}
          />
          {errors.Item_Description && (
            <div>
              <h1>{errors.Item_Description}</h1>
            </div>
          )}
        </div>
        <button className="submit">Submit Form</button>
      </form>
    </div>
  );
};
export default ItemForm;

import { useContext, useState } from "react";
import { entityDetails } from "../App";
import { ENTITY } from "../Utils/Constants";
import FormInput from "../Utils/FormInput";
import { useNavigate } from "react-router-dom";

const ItemForm = () => {
  const { itemList, setItemList } = useContext(entityDetails);
  const [inputValue, setInputValue] = useState({
    Item_Name: "",
    Item_Description: "",
    Price: "",
  });
  const navigate = useNavigate();

  const { Item_Name, Item_Description, Price } = inputValue;

  const handleChange = (type, e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const url = "http://localhost:8080/v1/item/add";
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(url, {
      method: "POST",
      body: JSON.stringify(inputValue),
    }).then((response) => response.json());

    alert("Item Added Successfully");
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
          />
        </div>
        <div className="input-container ic2">
          <FormInput
            type="text"
            value={Price}
            placeholder="Price"
            label="price"
            name="price"
            onChange={handleChange.bind(null, "Price")}
          />
        </div>
        <div className="input-container ic2">
          <FormInput
            type="text"
            value={Item_Description}
            placeholder="Description"
            label="description"
            name="description"
            onChange={handleChange.bind(null, "Item_Description")}
          />
        </div>
        <button className="submit">Submit Form</button>
      </form>
    </div>
  );
};
export default ItemForm;

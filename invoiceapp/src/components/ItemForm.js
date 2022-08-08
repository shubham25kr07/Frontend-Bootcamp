import { useState } from "react";
import { ENTITY } from "../Utils/Constants";
import FormInput from "../Utils/FormInput";

const ItemForm = (props) => {
  const { setFlag, setItemList, itemList } = props;
  const [inputValue, setInputValue] = useState({
    name: "",
    price: "",
    description: "",
  });
  const { name, price, description } = inputValue;

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

    let newArray = [...itemList, inputValue];
    localStorage.setItem(ENTITY.ITEM_ENTITY, JSON.stringify(newArray));
    setFlag(true);
    setItemList(newArray);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">Add Item</div>
        <div className="input-container ic1">
          <FormInput
            type="text"
            value={name}
            placeholder="Item Name"
            label="Name"
            name="name"
            onChange={handleChange.bind(null, "name")}
          />
        </div>
        <div className="input-container ic2">
          <FormInput
            type="text"
            value={price}
            placeholder="Price"
            label="price"
            name="price"
            onChange={handleChange.bind(null, "price")}
          />
        </div>
        <div className="input-container ic2">
          <FormInput
            type="text"
            value={description}
            placeholder="Description"
            label="description"
            name="description"
            onChange={handleChange.bind(null, "description")}
          />
        </div>
        <button className="submit">Submit Form</button>
      </form>
    </div>
  );
};
export default ItemForm;

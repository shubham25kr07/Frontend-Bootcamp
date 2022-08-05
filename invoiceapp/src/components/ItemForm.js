import { useState } from "react";
import ENTITY from "../Utils/Constants";
import FormInput from "../Utils/FormInput";

const ItemForm = (props) => {
  const ITEM_ENTITY = ENTITY.ITEM_ENTITY;
  const { setFlag } = props;
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
    var x = [inputValue];
    var array = JSON.parse(localStorage.getItem(ITEM_ENTITY)) || [];

    let newArray = [...array, ...x];
    localStorage.setItem(ITEM_ENTITY, JSON.stringify(newArray));
    setFlag(1);
    array = JSON.parse(localStorage.getItem(ITEM_ENTITY));
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

{
  /* <div class="form">
<div class="title">Welcome</div>
<!--       <div class="subtitle">Let's create your account!</div> -->
<div class="input-container ic1">
  <input id="firstname" class="input" type="text" placeholder=" " />
  <div class="cut"></div>
  <label for="firstname" class="placeholder">First name</label>
</div>
<div class="input-container ic2">
  <input id="lastname" class="input" type="text" placeholder=" " />
  <div class="cut"></div>
  <label for="lastname" class="placeholder">Last name</label>
</div>
<div class="input-container ic2">
  <input id="email" class="input" type="text" placeholder=" " />
  <div class="cut cut-short"></div>
  <label for="email" class="placeholder">Email</>
</div>
<button type="text" class="submit">submit</button>
</div> */
}

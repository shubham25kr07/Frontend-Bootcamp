import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../utils/FormInput";
import TextArea from "../utils/TextArea";
import Label from "../utils/Label";
import { EntityDetailsContext } from "../App";
import Errors from "../utils/Errors";
import { addItem } from "../apis/item";

const ItemForm = () => {
  const { setItemList } = useContext(EntityDetailsContext);
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
  const [isDisabled, setDisabled] = useState(true);
  const { Item_Name, Item_Description, Price } = inputValue;
  const navigate = useNavigate();

  const checkFields = (type, value) => {
    const tempInputValue = inputValue;
    tempInputValue[type] = value;
    if (
      tempInputValue.Item_Name &&
      tempInputValue.Item_Description &&
      tempInputValue.Price
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleChange = (type, e) => {
    const { value } = e.target;
    checkFields(type, value);

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
  const extractData = (json) => {
    const responseItem = {
      id: json.ItemId,
      Item_Name: json.name,
      Price: json.price,
      Item_Description: json.description,

      added_on: "Today",
    };
    return responseItem;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (errors.Description || errors.Item_Name || errors.Price) {
      alert("Form Entries are not valid");
      return;
    }
    const requestBodyJson = inputValue;
    requestBodyJson["Price"] = Number(requestBodyJson.Price);

    const addData = async () => {
      const response = await addItem(requestBodyJson);
      const json = await response.json();

      if (response.status !== 200) {
        throw new Error(json.message);
      } else {
        const responseItem = extractData(json);
        setItemList((prev) => {
          console.log(prev);
          return [...prev, responseItem];
        });
        alert("Item Added Successfully");
        navigate("/item");
      }
    };
    // addItemUtil();
    addData();
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
            <Errors value={errors.Name} className={"error"} />
          </div>
        </div>
        <div className="input-container label-and-error">
          <div className="lable-input">
            <FormInput
              type="number"
              value={Price}
              label="Price"
              name="price"
              onChange={handleChange.bind(null, "Price")}
              onBlur={handleBlur.bind(null, "Price")}
            />
            <Errors value={errors.Price} className={"error"} />
          </div>
        </div>
        <div className="input-container label-and-error mb">
          <div className="lable-input">
            <Label label="Description" />
            <TextArea
              className={"description"}
              label="Description"
              id="Item_Description"
              name="Item_Description"
              value={Item_Description}
              onChange={handleChange.bind(null, "Item_Description")}
              onBlur={handleBlur.bind(null, "Description")}
            />
            <Errors value={errors.Description} className={"error"} />
          </div>
        </div>
        <button
          className={isDisabled ? "disabled-item-button" : "submit-item-button"}
          disabled={isDisabled}
        >
          {" "}
          <i className="fa fa-file"></i>Save Item
        </button>
      </form>
    </div>
  );
};
export default ItemForm;

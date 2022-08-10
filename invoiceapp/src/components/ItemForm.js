import { useState } from "react";
import FormInput from "../Utils/FormInput";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.Item_Name) {
    errors.Item_Name = "Required";
  }

  if (!values.Price) {
    errors.Price = "Required";
  }

  if (!values.Item_Description) {
    errors.Item_Description = "Required";
  }

  return errors;
};

const ItemForm = () => {
  const [inputValue, setInputValue] = useState({
    Item_Name: "",
    Item_Description: "",
    Price: "",
  });

  const formik = useFormik({
    initialValues: {
      Item_Name: "",
      Item_Description: "",
      Price: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  const navigate = useNavigate();
  const { Item_Name, Item_Description, Price } = inputValue;
  const url = "http://localhost:8080/v1/item/add";

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
    }).then((response) => response.json());

    // alert("Item Added Successfully");
    navigate("/item");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="title">Add Item</div>
        <div className="input-container ic1">
          <FormInput
            type="text"
            // value={Item_Name}
            placeholder="Item Name"
            label="Name"
            name="name"
            // onChange={handleChange.bind(null, "Item_Name")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Item_Name}
          />
          {formik.touched.Item_Name && formik.errors.Item_Name ? (
            <div>{formik.errors.Item_Name}</div>
          ) : null}
        </div>
        <div className="input-container ic2">
          <FormInput
            type="text"
            // value={Price}
            placeholder="Price"
            label="price"
            name="price"
            // onChange={handleChange.bind(null, "Price")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Price}
          />
          {formik.touched.Price && formik.errors.Price ? (
            <div>{formik.errors.Price}</div>
          ) : null}
        </div>
        <div className="input-container ic2">
          <input
            id="Item_Description"
            name="Item_Description"
            type="Item_Description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Item_Description}
          />
          {formik.touched.Item_Description && formik.errors.Item_Description ? (
            <div>{formik.errors.Item_Description}</div>
          ) : null}
          {/* 
          <FormInput
            type="text"
            // onblur={handleBlur}
            // value={Item_Description}
            placeholder="Description"
            label="description"
            name="description"
            // onChange={handleChange.bind(null, "Item_Description")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Item_Description}
          />
          {formik.touched.Item_Description &&
          formik.errors.PricItem_Descriptione ? (
            <div>{formik.errors.Item_Description}</div>
          ) : null} */}
        </div>
        <button className="submit">Submit Form</button>
      </form>
    </div>
  );
};
export default ItemForm;

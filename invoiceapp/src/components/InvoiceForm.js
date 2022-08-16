import { useContext, useState } from "react";
import { ITEM_COLUMN } from "../Utils/Constants";
// import { Table } from "react-virtualized";
import FormInput from "../Utils/FormInput";
import Table from "../Utils/Table";
import { EntityDetailsContext } from "../App";
import PopUp from "../Utils/PopUp";
import DropDownModal from "../Utils/DropDownList";
const InvoiceForm = () => {
  const { itemList, setItemList } = useContext(EntityDetailsContext);
  const [displayModel, setDisplayModel] = useState(false);

  console.log(displayModel);
  const showModel = () => {
    setDisplayModel(!displayModel);
  };
  const [inputValue, setInputValue] = useState({
    IssuedAt: new Date().toISOString().slice(0, 10),
    DueDate: "",
    Notes: "",
    InvoiceNumber: "",
    ReferenceNumber: "",
  });
  console.log(itemList);
  const pagination = false;
  const { IssuedAt, DueDate, Notes, ReferenceNumber, InvoiceNumber } =
    inputValue;
  const [showItemList, setShowItemList] = useState(false);
  const handleChange = () => {};
  const saveInvoice = () => {};
  const validateDate = () => {};
  const itemListPopUp = () => {
    setShowItemList(!showItemList);
  };
  const validateNotes = () => {};
  const [selectedItemList, setSelectedItemList] = useState([]);
  console.log(selectedItemList);
  return (
    <div className="form-container">
      <div className="form-top-header">
        <h1>New Invoice</h1>
        <button className="button-61">
          <i className="fa fa-file"></i>Save Invoice
        </button>
      </div>
      <form onSubmit={saveInvoice}>
        <div className="form-first-div">
          <div className="div-f1">
            <div className="invoice-bill-to">Bill To</div>

            <div className="invoice-customer-details-button">
              <div className="">
                <div>Name:</div>
                <div>Phone: </div>
                <div>Email:</div>
              </div>

              <button className="invoice-bill-to-button">Change</button>
            </div>
          </div>
          <div className="div-f2">
            <div className="div-dates">
              <div>
                <FormInput
                  type="date"
                  className="input-dates"
                  value={IssuedAt}
                  placeholder="Issued At"
                  label="IssuedAt"
                  name="IssuedAt"
                  onChange={handleChange.bind(null, "IssuedAt")}
                  onBlur={validateDate.bind(null, "IssuedAt")} //change the name of handleBlur
                  disabled
                />
              </div>
              <div>
                <FormInput
                  type="date"
                  className="input-dates"
                  value={DueDate}
                  placeholder="Due Date"
                  label="DueDate"
                  name="DueDate"
                  onChange={handleChange.bind(null, "DueDate")}
                  onBlur={validateDate.bind(null, "DueDate")} //change the name of handleBlur
                />
              </div>
            </div>
            <div className="div-numbers">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div></div>
        <div></div>
        {/* <div>
     
          <div>
            <div>
              <FormInput
                type=""
                value={IssuedAt}
                placeholder="Issued At"
                label="IssuedAt"
                name="IssuedAt"
                onChange={handleChange.bind(null, "IssuedAt")}
                onBlur={validateDate.bind(null, "IssuedAt")} //change the name of handleBlur
                disabled
              />
              <FormInput
                type="date"
                value={DueDate}
                placeholder="Due Date"
                label="DueDate"
                name="DueDate"
                onChange={handleChange.bind(null, "DueDate")}
                onBlur={validateDate.bind(null, "DueDate")} //change the name of handleBlur
              />
            </div>
            <div>
              <FormInput
                type="text"
                value={InvoiceNumber}
                placeholder="InvoiceNumber"
                label="InvoiceNumber"
                name="InvoiceNumber"
                onChange={handleChange.bind(null, "IssuedAt")}
                onBlur={validateDate.bind(null, "IssuedAt")} //change the name of handleBlur
                disabled
              />
              <FormInput
                type="text"
                value={ReferenceNumber}
                placeholder="ReferenceNumber"
                label="ReferenceNumber"
                name="ReferenceNumber"
                onChange={handleChange.bind(null, "ReferenceNumber")}
                onBlur={validateDate.bind(null, "ReferenceNumber")} //change the name of handleBlur
              />
            </div>
          </div>
        </div> */}
        {/* <div>
          {selectedItemList.map((selecteItem) => {
            return (
              <div>
                Name : {selecteItem.Item_Name} Price: {selecteItem.Price}
              </div>
            );
          })}

          <button type="button" onClick={showModel}>
            Add Item
          </button>
        </div>
        <div> */}

        {/* <FormInput
            type="text"
            value={Notes}
            placeholder=""
            label="Notes"
            name="Notes"
            onChange={handleChange.bind(null, "Notes")}
            onBlur={validateNotes.bind(null, "Notes")} //change the name of handleBlur
          />
        </div> */}
      </form>
      <PopUp
        dataList={itemList}
        displayModel={displayModel}
        showModel={showModel}
        setSelectedItemList={setSelectedItemList}
      />
    </div>
  );
};
export default InvoiceForm;

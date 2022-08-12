import { useContext, useState } from "react";
import { ITEM_COLUMN } from "../Utils/Constants";
// import { Table } from "react-virtualized";
import FormInput from "../Utils/FormInput";
import Table from "../Utils/Table";
import { EntityDetailsContext } from "../App";
const InvoiceForm = () => {
  const { itemList, setItemList } = useContext(EntityDetailsContext);
  const [inputValue, setInputValue] = useState({
    IssuedAt: new Date().toISOString().slice(0, 10),
    DueDate: "",
    Notes: "",
    InvoiceNumber: "",
    ReferenceNumber: "",
  });
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

  return (
    <div className="input-container ic1">
      <form onSubmit={saveInvoice}>
        <div>
          <h1>New Invoice</h1>
          <button>Save Invoice</button>
        </div>
        <div>
          <div>
            <FormInput />
            <button>Change</button>
          </div>
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
        </div>
        <div>
          {/* <Table /> */}
          <button type="button" onClick={itemListPopUp}>
            Add an Item
          </button>
          {showItemList && (
            <Table
              column={ITEM_COLUMN}
              datalist={itemList}
              pagination={pagination}
            />
          )}
        </div>
        <div>
          {/* Notes */}
          <FormInput
            type="text"
            value={Notes}
            placeholder=""
            label="Notes"
            name="Notes"
            onChange={handleChange.bind(null, "Notes")}
            onBlur={validateNotes.bind(null, "Notes")} //change the name of handleBlur
          />
        </div>
      </form>
    </div>
  );
};
export default InvoiceForm;

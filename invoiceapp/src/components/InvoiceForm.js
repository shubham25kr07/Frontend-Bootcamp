import { useState } from "react";
import FormInput from "../Utils/FormInput";

const InvoiceForm = () => {
  const [inputValue, setInputValue] = useState({
    IssuedAt: new Date().toISOString().slice(0, 10),
    DueDate: "",
    Notes: "",
    InvoiceNumber: "",
    ReferenceNumber: "",
  });
  const { IssuedAt, DueDate, Notes, ReferenceNumber, InvoiceNumber } =
    inputValue;

  const handleChange = () => {};
  const saveInvoice = () => {};
  const validateDate = () => {};
  const itemListPopUp = () => {};
  const validateNotes = () => {};

  return (
    <div>
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
          // Selected Items Table
          <button type="button" onClick={itemListPopUp}>
            Add an Item
          </button>
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
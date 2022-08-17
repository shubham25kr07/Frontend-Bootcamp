import { useContext, useState } from "react";
import { ITEM_COLUMN, INVOICE_ITEMS_COLUMN } from "../Utils/Constants";
// import { Table } from "react-virtualized";
import FormInput from "../Utils/FormInput";
import Table from "../Utils/Table";
import { EntityDetailsContext } from "../App";
import PopUp from "../Utils/PopUp";
import DropDownModal from "../Utils/DropDownList";
import Label from "../Utils/Label";
import Input from "../Utils/Input";

import TableHeader from "../Utils/TableHeader";
import TableRow from "../Utils/TableRow";

import ItemCard from "../Utils/ItemCard";

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
  // console.log(INVOICE_ITEMS_COLUMN);
  return (
    <div className="form-container">
      <div className="form-top-header">
        <h1>New Invoice</h1>
        <button className="add-button">
          <i className="fa fa-file"></i>Save Invoice
        </button>
      </div>
      <form onSubmit={saveInvoice}>
        <div className="form-first-div">
          <div className="div-f1">
            <div className="invoice-bill-to">Bill To</div>

            <div className="invoice-customer-details-button">
              <div className="">
                <div>shubham</div>
                <div>1234 </div>
                <div>sk@gmail.com</div>
              </div>

              <button className="invoice-bill-to-button">Change</button>
            </div>
          </div>
          <div className="div-f2">
            <div className="div-dates">
              <div>
                <Label label="Issued At" />
                <div className="div-i-input">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  <Input
                    type="date"
                    className="input-dates"
                    value={IssuedAt}
                    placeholder="Issued At"
                    name="IssuedAt"
                    onChange={handleChange.bind(null, "IssuedAt")}
                    onBlur={validateDate.bind(null, "IssuedAt")} //change the name of handleBlur
                    isDisabled={true}
                  />
                </div>
              </div>
              <div>
                <Label label="Due Date" />
                <div className="div-i-input">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  <Input
                    type="date"
                    className="input-dates"
                    value={DueDate}
                    placeholder="Due Date"
                    name="DueDate"
                    onChange={handleChange.bind(null, "DueDate")}
                    onBlur={validateDate.bind(null, "DueDate")} //change the name of handleBlur
                  />
                </div>
              </div>
            </div>
            <div className="div-numbers">
              <div>
                <Label label="Invoice Number" />
                <div className="div-i-input">
                  <i class="fa fa-hashtag" aria-hidden="true"></i>
                  <Input
                    type="text"
                    value={InvoiceNumber}
                    className="input-dates"
                    placeholder="InvoiceNumber"
                    name="InvoiceNumber"
                    onChange={handleChange.bind(null, "IssuedAt")}
                    onBlur={validateDate.bind(null, "IssuedAt")} //change the name of handleBlur
                    isDisabled={true}
                  />
                </div>
              </div>
              <div>
                <Label label="Ref Number" />
                <div className="div-i-input">
                  <i class="fa fa-hashtag" aria-hidden="true"></i>
                  <Input
                    type="text"
                    value={ReferenceNumber}
                    placeholder="ReferenceNumber"
                    className="input-dates"
                    label="Ref Number"
                    name="ReferenceNumber"
                    onChange={handleChange.bind(null, "ReferenceNumber")}
                    onBlur={validateDate.bind(null, "ReferenceNumber")} //change the name of handleBlur
                    isDisabled={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="second-div">
          <div className="table-header">
            <TableHeader columns={INVOICE_ITEMS_COLUMN} />
          </div>
          <div className="table-row">
            <TableRow
              dataList={selectedItemList}
              columns={INVOICE_ITEMS_COLUMN}
            />
          </div>
          <div className="table-button">
            <button
              className="add-item-button"
              type="button"
              onClick={showModel}
            >
              <i class="fa fa-shopping-basket"></i>
              Add an Item
            </button>
          </div>
        </div>
        <div></div>

        <div></div>
        <div className="form-third-div">
          <div>
            <Label label="Notes" />
            <div>
              <Input
                type="text"
                className="notes"
                value={Notes}
                name="Notes"
                onChange={handleChange.bind(null, "Notes")}
                onBlur={validateDate.bind(null, "Notes")}
              />
            </div>
          </div>
          <div className="form-third-div-f2">
            <div className="form-item-cards">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
            <hr className="hr-line" />
            <ItemCard
              className={"total-amount"}
              classNameField={"total-amount-field"}
            />
          </div>
        </div>

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
        <div>
          {/* {selectedItemList.map((selecteItem) => {
            return (
              <div>
                Name : {selecteItem.Item_Name} Price: {selecteItem.Price}
              </div>
            );
          })} */}
        </div>
        {/* <div> */}

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

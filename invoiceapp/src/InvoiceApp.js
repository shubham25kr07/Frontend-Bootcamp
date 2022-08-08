import { useState } from "react";
import Customer from "./components/Customer";
import Item from "./components/Items";

const InvoiceApp = () => {
  const [isCustomer, setIsCustomer] = useState(1);

  const handleButton = (event) => {
    event.preventDefault();
    setIsCustomer(isCustomer ? 0 : 1);
  };
  return (
    <div>
      {isCustomer ? (
        <div>
          <button type="button" onClick={handleButton}>
            Items
          </button>
          <Customer />
        </div>
      ) : (
        <div>
          <button type="button" onClick={handleButton}>
            Customers
          </button>
          <Item />
        </div>
      )}
    </div>
  );
};

export default InvoiceApp;

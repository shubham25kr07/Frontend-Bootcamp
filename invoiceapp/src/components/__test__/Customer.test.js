import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Customer from "../Customer";
import { BrowserRouter } from "react-router-dom";
import { EntityDetailsContext } from "../../App";
import { CustomerApi } from "../../Utils/Network";
import { useEffect, useState } from "react";
const MockCustomer = () => {
  const [customerList, setCustomerList] = useState([]);
  const propsValue = {
    customerList,
    setCustomerList,
  };
  CustomerApi(setCustomerList);
  return (
    // <Customer />
    <EntityDetailsContext.Provider value={propsValue}>
      <BrowserRouter>
        <Customer />
      </BrowserRouter>
    </EntityDetailsContext.Provider>
  );
};
describe("Customer", () => {
  test("Testing Customer List Page ", async () => {
    render(<MockCustomer />);
    const value1 = await screen.findByTestId("custom-element");
    expect(value1.innerHTML).toBe("NO Customers");
  });
});

const getCustomerList = async (page) => {
  const url = `http://localhost:8080/v1/customer/customerList?page=${page}`;
  const data = {
    sort_key: "name",
    sort_value: "ASC",
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  }).then(async (response) => {
    return response.json();
  });

  return response.customer;
};

const addCustomer = async (data) => {
  const url = "http://localhost:8080/v1/customer/add";

  const response = await fetch(url, {
    method: "POST",

    body: JSON.stringify(data),
  }).then(async (response) => {
    return response;
  });

  return response;
};

export { getCustomerList, addCustomer };

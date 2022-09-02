const getCustomerList = async (page, data) => {
  const url = `${process.env.REACT_APP_HOST}/v1/customer/customerList?page=${page}`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  }).then(async (response) => {
    return response.json();
  });

  return response.customer;
};

const addCustomer = async (data) => {
  const url = `${process.env.REACT_APP_HOST}/v1/customer/add`;

  const response = await fetch(url, {
    method: "POST",

    body: JSON.stringify(data),
  }).then(async (response) => {
    return response;
  });

  return response;
};

export { getCustomerList, addCustomer };

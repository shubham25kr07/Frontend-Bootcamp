const getCustomerList = async (page, data) => {
  const url = `${process.env.REACT_APP_HOST}/v1/customer/customerList?page=${page}`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
  // .then(async (response) => {
  //   return response.json();
  // });
  const json = await response.json();
  // const response = await await fetch(url, {
  //   method: "POST",
  //   body: JSON.stringify(data),
  // });
  // const movies = await response.json();
  // return movies;
  // console.log(json);
  return json;
};

const addCustomer = async (data) => {
  const url = `${process.env.REACT_APP_HOST}/v1/customer/add`;

  const response = await fetch(url, {
    method: "POST",

    body: JSON.stringify(data),
  });
  // .then(async (response) => {
  //   return response;
  // });

  return response;
};

export { getCustomerList, addCustomer };

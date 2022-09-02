const getInvoiceList = async () => {
  const url = "http://localhost:8080/v1/invoice/list";

  const invoiceList = await fetch(url, {
    method: "GET",
  }).then((response) => response.json());

  return invoiceList;
};

const addInvoice = async (data) => {
  const url = "http://localhost:8080/v1/invoice/create";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(async (response) => {
      return response;
    })

    .catch((error) => {
      console.table(error);
    });
  return response;
};

export { getInvoiceList, addInvoice };

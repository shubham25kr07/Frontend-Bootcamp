const getItemList = async (page, data) => {
  const url = `${process.env.REACT_APP_HOST}/v1/item/itemList?page=${page}`;

  const itemList = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json.item);

      return json.item;
    })
    .catch((error) => console.table(error));

  return itemList;
};

const addItem = async (data) => {
  const url = `${process.env.REACT_APP_HOST}/v1/item/add`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  }).then(async (response) => {
    return response;
  });

  return response;
};
export { getItemList, addItem };

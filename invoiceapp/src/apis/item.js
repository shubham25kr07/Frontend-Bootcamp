const getItemList = async (page) => {
  const url = `http://localhost:8080/v1/item/itemList?page=${page}`;
  const data = {
    sort_key: "item_name",
    sort_value: "ASC",
  };
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
  const url = "http://localhost:8080/v1/item/add";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  }).then(async (response) => {
    return response;
  });

  return response;
};
export { getItemList, addItem };

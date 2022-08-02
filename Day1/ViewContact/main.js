let div = document.getElementById("content");
let data = [];

let ViewContact = () => {
  if (data.length == 0) {
    let h3 = document.createElement("h3");
    h3.innerHTML = "No contact available";
    div.appendChild(h3);
    return;
  }

  const row = document.createDocumentFragment();
  let table = document.createElement("table");
  table.setAttribute("id", "tableview");
  let tbr = document.createElement("tr");
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  th1.innerHTML = "Name";
  th2.innerHTML = "Phone Number";
  tbr.appendChild(th1);
  tbr.appendChild(th2);
  row.appendChild(tbr);

  data.forEach((element) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerHTML = `${element.name}`;
    td2.innerHTML = `${element.phoneNumber}`;
    tr.appendChild(td1);
    tr.appendChild(td2);
    row.appendChild(tr);
  });
  table.appendChild(row);
  div.appendChild(table);
};

(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data);
  ViewContact();
})();

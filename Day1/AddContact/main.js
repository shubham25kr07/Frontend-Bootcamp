let form = document.getElementById("addContactForm");
let Name = document.getElementById("fname");
let phoneNumber = document.getElementById("phonenumber");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  acceptData();
});
let data = [];

let acceptData = () => {
  data.push({
    name: Name.value,
    phoneNumber: phoneNumber.value,
  });

  localStorage.setItem("data", JSON.stringify(data));
  alert("Contact Added");
  resetForm();
};
let resetForm = () => {
  Name.value = "";
  phoneNumber.value = "";
};
(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data);
})();

import "./styles.css";

const mainEl = document.querySelector("#app");
document.body.appendChild(mainEl);

let registrationData = [];
let tableBodyEl = document.querySelector(".tableBody");
let salutationEl = document.getElementById("salutation");
let firstNameEl = document.getElementById("firstName");
let lastNameEl = document.getElementById("lastName");
let streetNameEl = document.getElementById("streetName");

let submitEl = document.getElementById("submit");
submitEl.addEventListener("click", function () {
  let salutationVal = salutationEl.value;
  let firstNameVal = firstNameEl.value;
  let lastNameVal = lastNameEl.value;
  let streetNameVal = streetNameEl.value;

  registrationData.push({
    salutation: `${salutationVal}`,
    firstName: `${firstNameVal}`,
    lastName: `${lastNameVal}`,
    streetName: `${streetNameVal}`
  });
  console.log(registrationData);
  createRow();
});

function createRow() {
  let newRowEl = document.createElement("tr");
  tableBodyEl.appendChild(newRowEl);

  let salutationDataEl = document.createElement("td");
  // salutationDataEl.className = "salutationData";
  salutationDataEl.innerHTML = registrationData[0].salutation;
  newRowEl.appendChild(salutationDataEl);

  let firstNameDataEl = document.createElement("td");
  // firstNameDataEl.className = "firstNameData";
  firstNameDataEl.innerHTML = registrationData[0].firstName;
  newRowEl.appendChild(firstNameDataEl);

  let lastNameDataEl = document.createElement("td");
  // lastNameDataEl.className = "lastNameData";
  lastNameDataEl.innerHTML = registrationData[0].lastName;
  newRowEl.appendChild(lastNameDataEl);

  let screetDataEl = document.createElement("td");
  // screetDataEl.className = "screetData";
  screetDataEl.innerHTML = registrationData[0].streetName;
  newRowEl.appendChild(screetDataEl);
}

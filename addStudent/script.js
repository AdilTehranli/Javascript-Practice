"use strict";

let users = [
  {
    name: "Kamil",
    surname: "Memmedov",
  },
  {
    name: "Arzu",
    surname: "Memmedova",
  },
  {
    name: "Aysel",
    surname: "Karimova",
  },
  {
    name: "Yulia",
    surname: "Aleksandrovic",
  },
  {
    name: "Katya",
    surname: "Alexsa",
  },
  {
    name: "Olqa",
    surname: "Vurtasova",
  },
];

let nameInp;
let surnameInp;
let allTable = document.querySelector(".table tbody");
let isEditing = false;
let editingIndex = null;

function handleButtonClick() {
  if (isEditing) {
    updateData();
  } else {
    sendData();
  }
}

function sendData() {
  const inpObj = {};

  nameInp = document.querySelector(".name");
  surnameInp = document.querySelector(".surname");

  inpObj.name = nameInp.value;
  inpObj.surname = surnameInp.value;
  users.push(inpObj);
  getData();
  clearInputs();
}

function getData() {
  allTable.innerHTML = "";
  users.forEach((item, index) => {
    allTable.innerHTML += `  <tr>
        <th scope="row">${index + 1}</th>
        <td class="name">${item.name}</td>
        <td class="surname" >${item.surname}</td>
        <td  onclick="deleteRow(${index})" ><i class="fa-solid fa-trash"></i></td>
        <td class="update" onclick="edit(${index})"  ><i class="fa-solid fa-pen-to-square"></i></td>
        </tr>`;
  });
}

function deleteRow(index) {
  users.splice(index, 1);
  getData();
}

function edit(index) {
  isEditing = true;
  editingIndex = index;

  nameInp = document.querySelector(".name");
  surnameInp = document.querySelector(".surname");

  nameInp.value = users[index].name;
  surnameInp.value = users[index].surname;

  const button = document.querySelector("button[onclick='handleButtonClick()']");
  button.innerText = "Update Row";
}

function updateData() {
  if (editingIndex === null) {
    return;
  }
  nameInp = document.querySelector(".name");
  surnameInp = document.querySelector(".surname");

  users[editingIndex].name = nameInp.value;
  users[editingIndex].surname = surnameInp.value;

  isEditing = false;
  editingIndex = null;

  const button = document.querySelector("button[onclick='handleButtonClick()']");
  button.innerText = "Add Row";

  getData();
  clearInputs();
}

function clearInputs() {
  document.querySelector(".name").value = "";
  document.querySelector(".surname").value = "";
}
getData();

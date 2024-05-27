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
let nameInp 
let surnameInp
let allTable = document.querySelector(".table tbody")

function sendData() {
    const inpObj={};
    
     nameInp = document.querySelector(".name")
     surnameInp = document.querySelector(".surname")

    inpObj.name = nameInp.value
    inpObj.surname = surnameInp.value
    users.push(inpObj)
getData()

}
getData()

function getData() {
    allTable.innerHTML=""; 
      users.forEach((item,index)=>{
        allTable.innerHTML+=`  <tr>
        <th scope="row">${index+1}</th>
        <td class="name">${item.name}</td>
        <td class="surname" >${item.surname}</td>
        <td  onclick="deleteRow(${index})" ><i class="fa-solid fa-trash"></i></td>
        </tr>`
    })
}

function deleteRow(index) {
    users.splice(index,1)
    getData()
}
    
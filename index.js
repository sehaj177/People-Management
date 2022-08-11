const xhr = new XMLHttpRequest();
const source =
    "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";
xhr.open("GET", source, true);
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        let output = "";
        for (let i = 0; i < response.length; i++) {
            output += `
        <div class="card">
            <div class="team">
                <p class="name"> - ${response[i].name}</p>
                <p class="title">${response[i].username}</p>
                <p class="body">${response[i].email}</p>
            </div>
        </div>`;
        }
        document.querySelector(".output").innerHTML = output;
    }
};
xhr.send();

// // If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
//   console.log(notesObj);
  showNotes();
});

// // Function to show elements from localStorage
// function showNotes() {
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   let html = "";
//   notesObj.forEach(function(element, index) {
//     html += `
//             <div class="noteCard my-2 mx-2 card" style="width: 18rem; float:${index%2 == 0 ? "left" :"right"}">
//                     <div class="card-body">
//                         <h5 class="card-title"></h5>
//                         <p class="card-text"> ${element}</p>
//                     </div>
//                 </div>`;
                
//   });



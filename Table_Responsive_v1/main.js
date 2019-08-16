const availableElement = document.getElementById("available");
const unavailableElement = document.getElementById("unavailable");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

var base = firebase.database().ref();

function updateDB(event){
    event.preventDefault();
    const available       = availableElement.value;
    const unavailable     = unavailableElement.value;

    availableElement.value = "";
    unavailableElement.value = "";

    let obj = {
        ava: available,
        unava: unavailable
    };

    base.push(obj);
}


base.on("child_added", addDisplay);

let  display = document.getElementsByClassName("display")[0];

function addDisplay(rowData){
const row = rowData.val();
const rowAva = row.ava;
const rowUnava = row.unava;

const post = document.createElement("h1") 
const pEl = document.createElement("p");
post.innerText = rowAva;
pEl.innerText = rowUnava;

post.classList.add("show");

display.appendChild(post);
display.appendChild(pEl);
}
var updates = {};
for (var i in this.state.items) {
    var key = items[i]['.key'];
    if(items[i].done){
        updates[key] = null; // setting value to null deletes the key
    }
}
this.ref.update(updates);
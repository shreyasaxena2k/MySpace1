document.getElementById('add').addEventListener('click',getandupdate) 

// Getandupdate function
function getandupdate(){
    title = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    console.log("Updating List...");
    if (localStorage.getItem('Json') == null) {
        console.log("Updating ...");
        JsonArray = [];
        JsonArray.push([title, desc]);
        localStorage.setItem('Json', JSON.stringify(JsonArray))
    }
    else {
        JsonArrayStr = localStorage.getItem('Json')
        JsonArray = JSON.parse(JsonArrayStr);
        JsonArray.push([title, desc]);
        localStorage.setItem('Json', JSON.stringify(JsonArray))
    }
    update()
}

function update(){
// Populate the table
if (localStorage.getItem('Json') == null) {
    console.log("Updating ...");
    JsonArray = [];
    localStorage.setItem('Json', JSON.stringify(JsonArray))
}
else {
    JsonArrayStr = localStorage.getItem('Json')
    JsonArray = JSON.parse(JsonArrayStr);
    localStorage.setItem('Json', JSON.stringify(JsonArray))
}
let tb = document.getElementById('tablebody')
let str = ''
JsonArray.forEach((element, index) => {
    str += `
    <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button  id="add" class="btn  btn-sm btn-primary" onclick="deleted(${index})">Delete</button>
        </td>
    <tr>`
});
tb.innerHTML=str
}
getandupdate()

function deleted(itemIndex){
    console.log("Delete", itemIndex);
    JsonArrayStr = localStorage.getItem('Json')
    JsonArray = JSON.parse(JsonArrayStr);
    // Delete itemIndex element from the array
    JsonArray.splice(itemIndex, 1);
    localStorage.setItem('Json', JSON.stringify(JsonArray));
    update();

}

function clearstorage(){
    if (confirm('Do u really want to clear?')){
    console.log('yeeeeee cleared!!')
    localStorage.clear()
    update()
    }
}
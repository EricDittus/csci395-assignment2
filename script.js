let colorSelected;

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    console.log(rows.length);

    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    }
}
//Adds a column
function addC() {
    //alert("Clicked Add Col")
    let rows = document.getElementsByTagName("tr");
    let length = rows.length;
    let new_col = document.createElement("td");
    for(let i = 0; i<length; i++){
      rows[i].appendChild(new_col);
    }
}

//Removes a row
function removeR() {
    //alert("Clicked Remove Row")
    let rows = document.getElementsByTagName("tr");
    let length = rows.length;
    rows[length-1].remove();
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}

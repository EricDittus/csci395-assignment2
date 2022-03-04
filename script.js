let colorSelected; 

//! this is for you
function addR() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    console.log(rows.length);
    
    if (rows.length === 0 || rows.length >= 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    }
}
//Adds a column done by EricDittus 
function addC() {
    //alert("Clicked Add Col")
    let cols = document.getElementsByTagName("td");
    console.log(cols.length); 
}

//! this is for you 
function removeR() {
    alert("Clicked Remove Row")
    if (rows.length === 0 || rows.length >= 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    }
}
//Remove a column done by EricDittus 
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

//done by others
function fill(){
    alert("Clicked Fill All")
}

//! this is for you
function clearAll(){
    alert("Clicked Clear All")
}

//done by others
function fillU(){
    alert("Clicked Fill All Uncolored")
}
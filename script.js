let colorSelected;
//! this is for you
function addR() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    console.log(rows.length);

    if (rows.length === 0 || rows.length >= 0) {
        let row = document.createElement("tr");
        row.setAttribute("id", "test");
        let col = document.createElement("td");
        col.setAttribute("id", "test1");
        col.onclick = function () {
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    }
}
//Adds a column done by EricDittus 
function addC() {
    //alert("Clicked Add Col")
    // col.appendChild(row);
    // grid.appendChild(col);    


    let grid = document.getElementById("grid");
    let cols = document.getElementById("test1");
    console.log(cols.length);

    if (cols.length === 0 || cols.length >= 0) {
        let row = document.getElementById("test");
        let col = document.getElementById("test1");
        col.onclick = function () {
            this.style.backgroundColor = colorSelected;
        };
        col.appendChild(row);
        grid.appendChild(col);
    }
}
//! this is for you
function removeR() {
    var el = document.getElementById("test");
    var el2 = document.getElementById("test1");
    el.remove();
    el2.remove();
}

//Remove a column done by EricDittus 
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

//done by others
function fill() {
    alert("Clicked Fill All")
}

//! this is for you
function clearAll() {
    alert("Clicked Clear All")
}

//done by others
function fillU() {
    alert("Clicked Fill All Uncolored")
}
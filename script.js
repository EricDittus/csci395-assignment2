let colorSelected;

//Adds a row
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
//Adds a column
function addC() {
    //alert("Clicked Add Col")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    let cols = document.getElementsByTagName("td");

    if(rows.length === 0){
      let row = document.createElement("tr");
      //let col = document.createElement("td");
      grid.appendChild(row);

    }
    let length = rows.length;
    let new_col = document.createElement("td");
    for(let i = 0; i<length; i++){
      rows[i].appendChild(new_col);
    }
}

//Removes a row
function removeR() {
    // //alert("Clicked Remove Row")
    // let rows = document.getElementsByTagName("tr");
    // let length = rows.length;
    // rows[length-1].remove();

    var el = document.getElementById("test");
    var el2 = document.getElementById("test1");
    el.remove();
    el2.remove();
}
//Remove a column
function removeC() {
    let rows = document.getElementsByTagName("tr");
    let cols = document.getElementsByTagName("td");
    let num_cols = cols.length;
    let num_rows = rows.length;
    let row_indexes = num_cols/num_rows;
    let last_child = false;
    let counter = 1;
    for(let i = 0; i <= num_cols; i++){
      if(counter === row_indexes){
        cols[i].remove();
        counter = 1;
      }
      counter++;
    }
    //alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    const grid = document.getElementById("grid");
    for (let row of grid.rows) 
    {
        for (let col of row.cells)
        {
            col.style.backgroundColor = colorSelected;
        }
    }
}

function clearAll(){
    const grid = document.getElementById("grid");
    for (let row of grid.rows)
    {
        for (let col of row.cells)
        {
            col.style.backgroundColor = "";
        }
    }
    
}


function fillU(){
    const grid = document.getElementById("grid");
    for (let row of grid.rows)
    {
        for (let col of row.cells)
        {
            if (col.style.backgroundColor === "")
            {
                col.style.backgroundColor = colorSelected;
            }
        }
    }   
}

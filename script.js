let colorSelected;

//Adds a row
function addR() {

    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    let cols = document.getElementsByTagName("td");
    let num_col_per_row = cols.length/rows.length;
    console.log(rows.length);

    if (rows.length === 0) {
        let row = document.createElement("tr");
        var col = document.createElement("td");
        col.onclick = function () {
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    }else{
      let row = document.createElement("tr");
      grid.appendChild(row);
      for(let i = 0; i < num_col_per_row; i++){
        var col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        let rows = document.getElementsByTagName("tr");
        rows[rows.length-1].appendChild(col);
      }

    }

}

//Adds a column
function addC() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    let cols = document.getElementsByTagName("td");

    if(rows.length === 0){
      var row = document.createElement("tr");
      var col = document.createElement("td");
      col.onclick = function (){
            this.style.backgroundColor = colorSelected;
      };
      row.appendChild(col)
      grid.appendChild(row);

    }else{
      for(let i = 0; i<rows.length; i++){
        var new_col = document.createElement("td");
        new_col.onclick = function (){
              this.style.backgroundColor = colorSelected;
        };
        rows[i].appendChild(new_col);
      }
    }

}

//Removes a row
function removeR() {
    let rows = document.getElementsByTagName("tr");
    let length = rows.length;
    rows[length-1].remove();

}
//Remove a column
function removeC() {
    let rows = document.getElementsByTagName("tr");
    let cols = document.getElementsByTagName("td");
    let grid = document.getElementById("grid");
    let num_cols = cols.length;
    let num_rows = rows.length;
    let row_indexes = num_cols/num_rows;

    if(cols.length===rows.length){
      for(let i = 0; i<num_rows; i++){
        cols[cols.length-1].remove()
        rows[rows.length-1].remove();
      }
    }else{
      let cols = document.getElementsByTagName("td");
      let counter = 1;
      for(let i = 0; i < num_cols; i++){
        if(counter === row_indexes){
          cols[i].remove();
          counter = 1;
        }
        counter++;
      }
    }
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

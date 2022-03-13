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
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    let cols = document.getElementsByTagName("td");

    if(rows.length === 0){
      let row = document.createElement("tr");
      let col = document.createElement("td");
      row.appendChild(col)
      grid.appendChild(row);

    }else{
      for(let i = 0; i<rows.length; i++){
        let new_col = document.createElement("td");
        rows[i].appendChild(new_col);
        //grid.appendChild(rows[i]);
      }
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
    let rows = document.getElementsByTagName("tr");
    let cols = document.getElementsByTagName("td");
    let grid = document.getElementById("grid");
    let num_cols = cols.length;
    let num_rows = rows.length;
    let row_indexes = num_cols/num_rows;

    if(cols.length===rows.length){
      for(let i = 0; i<num_rows; i++){
        //let col = document.createElement("td");
        cols[cols.length-1].remove()
        rows[rows.length-1].remove();
      }
    }else{
      let counter = 1;
      for(let i = 0; i < num_cols; i++){
        if(counter === row_indexes){
          cols[i].remove();
          counter = 1;
        }
        counter++;
      }
    }



    //alert("Clicked Remove Col")
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

let rows = 100;
let coloums = 26;

let adressColCont = document.querySelector(".adress-col-cont")
let adressRowCont = document.querySelector(".adress-row-cont")
let cellsCont = document.querySelector(".cells-cont")
let addressBar = document.querySelector(".address-bar")


// create row 1 to 100
for (let i=0 ; i<rows; i++) {
    let addressCol = document.createElement("div")
    addressCol.setAttribute("class" , "address-col")
    addressCol.innerText = i+1 ;
    adressColCont.appendChild(addressCol)
}

// create coloums a to z
for (let i=0 ; i<coloums ; i++) {
    let addressRow = document.createElement("div")
    addressRow.setAttribute("class" , "address-Row")
    addressRow.innerText =String.fromCharCode(65+i);
    adressRowCont.appendChild(addressRow)
}

// create row and coloums jo baki k row and coloums hai 
for (let i =0 ; i <rows ; i++) {
    let rowCont = document.createElement("div")
      rowCont.setAttribute("class" , "rowCont")
    for (let j =0 ; j<coloums; j++) {
      let cell = document.createElement("div")
      cell.setAttribute("class" , "cell")
      cell.setAttribute("contenteditable" , "true")
      rowCont.appendChild(cell);
      addListenerForAddressBarDisplay(cell , i , j )
    }
    cellsCont.appendChild(rowCont)
}

// find address of cell by address bar
function addListenerForAddressBarDisplay(cell , i ,j ) {
   cell.addEventListener("click" , (e) => {
        let rowId = i+1;
        let colId = String.fromCharCode(65+j);
        addressBar.value = `${colId}${rowId}` 
   })
}

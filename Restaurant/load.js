function loadTables() {
    for (var table of TableList) {
        var div = document.createElement("div");
        var h3 = document.createElement("h3");
        var cost = document.createElement("p");

        div.className = "table box";
        div.setAttribute("id", table.id);
        h3.textContent = table.name;

        cost.className = "table-p";
        cost.style.display = "inline";
        cost.textContent = "Rs. " + table.TotalBill + "   No. of items: " + table.noOfItems;

        div.appendChild(h3);
        div.appendChild(cost);
        div.addEventListener("drop", onDrop);
        div.addEventListener("dragover", dragOver);
        div.addEventListener("click", Button);

        document.getElementById('allTables').appendChild(div);


    }
}

loadTables();


function loadMenu() {
    for (var item of MenuList) {
        var div = document.createElement("div");
        div.className = "item box";

        var h3 = document.createElement("h3");
        //var cat = document.createElement("h3");
        h3.innerHTML = item.item_name;
        div.id = item.id;

        var h4 = document.createElement("h4");
        h4.innerHTML =" Category:" + item.category;
        var cost = document.createElement("p");
        cost.innerHTML = "Rs. " + item.cost  ;

        div.appendChild(h3);
        //div.appendChild(cat);
        div.appendChild(h4);
        div.appendChild(cost);
        
        document.getElementById('totalMenu').appendChild(div);
        div.setAttribute("draggable", "true");
        div.addEventListener("dragstart", dragstart);


    }
}
loadMenu();
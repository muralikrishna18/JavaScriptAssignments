var price;
var iName;

function dragstart() {
    for (var item of  MenuList) {
        if (item.id == this.id) {
            price = item.cost;
            iName = item.item_name;
            break;
        }
    }
}


function onDrop() {
    this.style.backgroundColor = "orange";
    for (var table of TableList) {
        if (table.id == this.id) {
            table.noOfItems++;
            table.TotalBill += price;
            table.items.push(iName);

            var obj = JSON.parse(localStorage.getItem(table.name));

            for(var j=0;j<obj.length;j++)
            {
                if(obj[j].item==iName)
                {
                    
                    obj[j].quantity=1;
                }
            }
            localStorage.setItem(table.name,JSON.stringify(obj));
            update();
            break;
        }
    }
}


function dragOver(ev) {
    ev.preventDefault();

}

function update() {
    var tableP = document.getElementsByClassName("table-p");
    for (var i = 0; i < tableP.length; i++) {
        tableP[i].textContent = "Rs. " + TableList[i].TotalBill + "   No. of items: " + TableList[i].noOfItems;
    }
}
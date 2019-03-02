const priceCell = 1; 

var count; 
var total_price; 
var items_table;

function init() {
    count = 0;
    total_price = 0;
    items_table = document.getElementById("items-table");
    document.getElementById("SelectedItems").innerHTML = "";
    document.getElementById("num").innerHTML = count; // undifined
    document.getElementById("price").innerHTML = total_price; 
}

function CheckOut() {

    alert("you select " + count + " Items .. ");
    location.href = "Login.html";
}


function addItem(name, price)
{
   // document.getElementById("SelectedItems").innerHTML += "<br/>" + name;
    if(count == 0)
    {
        items_table.innerHTML = "<tr><td><h5>Item</th><td><h5>Price</th></tr>";
    }
    items_table.innerHTML += "<tr onclick='check()' >"
                               +"<td>"+name+"</td>"
                               +"<td>"+price+" LE"+"</td>"
                               +"<td ><input type='button' value='Remove' onclick='deleteOrder(this)' class=buttons></td>"
                               +"</tr>"; 
    total_price = Math.round((price + total_price) * 100)/100; 
    count++;
    document.getElementById("num").innerHTML = count;
    document.getElementById("price").innerHTML = total_price; 
}


function deleteOrder(removeButton)
{ 
    var confirmation = window.confirm("If you want to cancel this order, Press OK!")
    if (confirmation == false) return; 
    var i = removeButton.parentNode.parentNode.rowIndex;
	var s = items_table.rows[i].cells[priceCell].innerHTML; 
    var price = Number(s.substr(0, s.length-3)); 
	items_table.deleteRow(i);
    document.getElementById("num").innerHTML = --count;
    total_price = Math.round((total_price - price) * 100)/100; 
    document.getElementById("price").innerHTML = total_price;  
    if(count == 0)
	 { 
   		items_table.innerHTML=""; 
     }
} 






function finishOrder() {
    alert("Thank you !! " + document.alertform.name.value);
}

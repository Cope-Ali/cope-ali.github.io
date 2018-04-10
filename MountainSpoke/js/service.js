var myTable = document.createElement('table');
var headerRow = document.createElement('tr');
var header1 = document.createElement('th');
var header2 = document.createElement('th');
header1.textContent = "Service";
header2.textContent = "Cost";
myTable.appendChild(headerRow);
headerRow.appendChild(header1);
headerRow.appendChild(header2);

var section = document.getElementById("table");
section.appendChild(myTable);

var request = new XMLHttpRequest();
request.open('GET', "data/repairCost.txt");
request.send();

request.onload = function () {
    var repairs = JSON.parse(request.response);
    serviceTable(repairs);
}

function serviceTable(jsonObj) {
    var repair = jsonObj['repairList'];
    for (var i = 0; i < repair.length; i++) {
        var row = document.createElement('tr');
        var item = document.createElement('td');
        var price = document.createElement('td');
        item.textContent = repair[i].name;
        price.textContent = repair[i].price;
        myTable.appendChild(row);
        row.appendChild(item);
        row.appendChild(price);
    }
}

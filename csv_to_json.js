// Solution guide http://www.techniche.co/insights/reading-excel-sheet-data-using-node-xlsx/

var xlsx = require('node-xlsx');
const fs = require('fs')
const path = require('path')

const xlsxObj = xlsx.parse('./customer-data.csv');
const header = xlsxObj[0].data[0];
const data = xlsxObj[0].data;
const jsonArr = []

for (var i = 1; i < data.length; i++) {
	var contactObj = {};
	for (var x = 0; x < data[i].length; x++) {
		contactObj[header[x]] = data[i][x];
	}
	jsonArr.push(contactObj);
}

const content = JSON.stringify(jsonArr, null, 2);

fs.writeFile("data.json", content);

console.log("completed");

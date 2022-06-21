// const table = document.createElement("table");
// const thead = document.createElement("thead");
// const tbody = document.createElement("tbody");
// const rows = document.createElement("tr");
// const heads = document.createElement("th");

// let heading1 = document.createElement("th");
// heading1.innerHTML = 'Hello';
// let heading2 = document.createElement("th");
// heading2.innerHTML = 'To';
// let heading3 = document.createElement("th");
// heading3.innerHTML = 'You';
// let heading4 = document.createElement("th");
// heading4.innerHTML = '!!!'

// row1.appendChild(heading1);
// row1.appendChild(heading2);
// row1.appendChild(heading3);
// row1.appendChild(heading4);
// thead.appendChild(row1);

// table.appendChild(thead);
// table.appendChild(tbody);
// document.getElementById("container").appendChild(table);

// let content = [
//     { title: "Consequences" },
//     { title: "Probability" },
//     { title: "None 1" },
//     { title: "Moderate 2" },
//     { title: "Serious 3" },
//     { title: "Major 4" },
//     { title: "Disastrous 5" },
//     { rowTitle: 'Frequent (once a week' },
//     { rowTitle: 'Possible (once 6 months' },
//     { rowTitle: 'Unusual (once 3 years' },
//     { rowTitle: 'Unlikely (once 10 years' },
//     { rowTitle: 'Highly unlikely (once in career' },
//     { number: 1 },
//     { number: 2 },
//     { number: 3 },
//     { number: 4 },
//     { number: 5 }
// ];

// function generateTableHead(table, data) {
//     let thead = table.createTHead();
//     let row = thead.insertRow();
//     for (let key of data) {
//         let th = document.createElement("th");
//         let text = document.createTextNode(key);
//         th.appendChild(text);
//         row.appendChild(th);
//     }
// }

// function generateTable(table, data) {
//     for (let element of data) {
//         let row = table.insertRow();
//         for (key in element) {
//             let cell = row.insertCell();
//             let text = document.createTextNode(element[key]);
//             cell.appendChild(text);
//         }
//     }
// }

// let table = document.querySelector("table");
// let data = Object.keys(content[0]);
// generateTable(table, content);
// generateTableHead(table, data);


// var table = document.createElement('table');
// for (var i = 1; i < 8; i++) {
//     var tr = document.createElement('tr');

//     var td1 = document.createElement('td');
//     var td2 = document.createElement('td');

//     var text1 = document.createTextNode('Text1');
//     var text2 = document.createTextNode('Text2');

//     td1.appendChild(text1);
//     td2.appendChild(text2);
//     tr.appendChild(td1);
//     tr.appendChild(td2);

//     table.appendChild(tr);
// }
// document.body.appendChild(table);

// var totalRows = 7;
// var cellsInRow = 5;
// var min = 1;
// var max = 10;

// function drawTable() {
//     // get the reference for the body
//     var div1 = document.getElementById('div1');

//     // creates a <table> element
//     var tbl = document.createElement("table");

//     // creating rows
//     for (var r = 0; r < totalRows; r++) {
//         var row = document.createElement("tr");

//         // create cells in row
//         for (var c = 0; c < cellsInRow; c++) {
//             var cell = document.createElement("td");
//             getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
//             var cellText = document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min);
//             cell.appendChild(cellText);
//             row.appendChild(cell);
//         }

//         tbl.appendChild(row); // add the row to the end of the table body
//     }

//     div1.appendChild(tbl); // appends <table> into <div1>
// }
// window.onload = drawTable; 

// Data to add to the table. Like json db data
// var data = {
//     results: [{ '': '', 'r': 's1', Consequences: '' },
//         { '': '', '': 's2', test: '' },
//         { 'Frequent (once a week)': '', 'Probability': 's3', test: '' },
//         { 'Possible (once 6 months)': '', 'Probability': 's3', test: '' },
//         { 'Unusual (once 3 years)': '', 'Probability': 's3', test: '' },
//         { 'Unlikely (once 10 years)': '', 'Probability': 's3', test: '' },
//         { 'Highly unlikely (once in career)': '', 'Probability': 's3', test: '' }]
// };

// // var data = {
// //     content: [
// //         { title: "Consequences" },
// //         { title: "Probability" },
// //         { title: "None 1" },
// //         { title: "Moderate 2" },
// //         { title: "Serious 3" },
// //         { title: "Major 4" },
// //         { title: "Disastrous 5" },
// //         { rowTitle: 'Frequent (once a week' },
// //         { rowTitle: 'Possible (once 6 months)' },
// //         { rowTitle: 'Unusual (once 3 years)' },
// //         { rowTitle: 'Unlikely (once 10 years)' },
// //         { rowTitle: 'Highly unlikely (once in career)' },
// //         { number: 1 },
// //         { number: 2 },
// //         { number: 3 },
// //         { number: 4 },
// //         { number: 5 }
// //     ]
// // };
// createTable(data.results);

// // Create table
// function createTable(data) {

//     // Check if at least one value exists in the json array
//     if (data.length > 0 && Array.isArray(data)) {

//         // Get div to create table
//         var mytable = document.getElementById("div1");

//         // Clear table if exists
//         var t = document.getElementById("myTable");
//         if (t) {
//             t.remove();
//         }

//         // Create table 
//         var table = document.createElement('table');
//         table.setAttribute('id', 'myTable');
//         table.setAttribute("border", "1");
//         table.style.borderCollapse = "collapse";
//         table.appendChild(createTHead(data));
//         table.appendChild(createTBody(data));
//         mytable.appendChild(table);
//     }
// }

// // Create table head
// function createTHead(data) {
//     var keys = Object.keys(data[0]);
//     var thead = document.createElement('thead');
//     var tr = document.createElement('tr');
//     for (var col = 0; col < keys.length; col++) {
//         var th = document.createElement('th');
//         th.appendChild(document.createTextNode(keys[col]));
//         tr.appendChild(th);
//     }
//     thead.appendChild(tr);
//     return thead;
// }

// // Create table body
// function createTBody(data) {
//     var keys = Object.keys(data[0]);
//     var tbody = document.createElement('tbody');
//     for (var row = 0; row < data.length; row++) {
//         var tr = document.createElement('tr');
//         for (var col = 0; col < keys.length; col++) {
//             var td = document.createElement('td');
//             td.appendChild(document.createTextNode(data[row][keys[col]]));
//             tr.appendChild(td);
//         }
//         tbody.appendChild(tr);
//     }
//     return tbody;
// }

// function createTable() {
//     // const div = document.getElementById("container");

//     for (var i = 0; i < 1; i++) {
//         const table = document.createElement("table");
//         const thead = document.createElement("thead");
//         const tbody = document.createElement("tbody");
//         const rowsHead = document.createElement("tr");
//         const rows = document.createElement("tr");
//         table.style.width = '60%';
//         table.style.height = '200px';
//         table.setAttribute('border', '1');
//         rows.setAttribute('id', 'rows');
//         for (var j = 1; j < 5; j++) {
//             if (i == 1 && j == 5) {
//                 break
//             } else {
//                 i == 1 && j == 5 ? rows.setAttribute('rowSpan', '5') : null;
//                 const heads = document.createElement("th");
//                 const cellText = document.createTextNode("Consequences");
//                 table.appendChild(thead);
//                 thead.appendChild(rowsHead);
//                 rowsHead.appendChild(heads);
//                 heads.appendChild(cellText);
//             }
//             for (k = 0; k < 1; k++) {
//                 i == 1 && j == 5 && k == 1 ? rows.setAttribute('colSpan', '1') : null;
//                 const data = document.createElement("td");
//                 const text = document.createTextNode("cell in row " + i + ", column " + j);
//                 table.appendChild(tbody);
//                 tbody.appendChild(rows)
//                 rows.appendChild(data);
//                 data.appendChild(text);
//                 tbody.setAttribute("class", 'body');
//                 data.setAttribute("class", 'td');
//             }
//         }
//         document.getElementById("container").appendChild(table);
//     }
// }
// createTable();

// thead => tr => th ===> DONE.
// tbody => tr => td

// let table = '';
// let rows = 7;
// let cols = 6;

// for (let r = 0; r < rows; r++) {
//     table += '<tr>';
//     for (let c = '1'; c <= cols; c++) {
//         table += '<td>' + c + '</td>';
//     }
//     table += '</tr>';
// }
// document.write('<table border=1>' + table + '</table>');
// const thead = document.createElement("thead");
// const tbody = document.createElement("tbody");
// const head =


const div = document.getElementById('container');
const table =
    `<table> 
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th id="title" colspan="5">Consequences</th>
</tr >
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td id="ConseqScale">None 1</td>
<td id="ConseqScale">Moderate 2</td>
<td id="ConseqScale">Serious 3</td>
<td id="ConseqScale">Major 4</td>
<td id="ConseqScale">Disastrous 5</td>
</tr>
<tr>
<td>Frequent (once a week)</td>
<td class="proba" rowspan="5">Probability</td>
<td class ="data"></td>
<td class ="data orange"></td>
<td class ="data red"></td>
<td class ="data red"></td>
<td class ="data red"></td>
</tr>
<tr>
<td>Possible (once 6 months)</td>
<td class ="data pulse"></td>
<td class ="data"></td>
<td class ="data orange"></td>
<td class ="data red"></td>
<td class ="data red"></td>
</tr>
<tr>
<td>Unusual (once 3 years)</td>
<td class ="data"></td>
<td class ="data"></td>
<td class ="data orange"></td>
<td class ="data orange"></td>
<td class ="data red pulse"></td>
</tr>
<tr>
<td>Unlikely (once 10 years)</td>
<td class ="data"></td>
<td class ="data"></td>
<td class ="data"></td>
<td class ="data"></td>
<td class ="data orange"></td>
</tr>
<tr>
<td>Highly unlikely (once in career)</td>
<td class ="data"></td>
<td class ="data"></td>
<td class ="data"></td>
<td class ="data"></td>
<td class ="data"></td>
</tr>
</tbody>
</table>`;


// document.getElementById("container").appendChild(table);

div.innerHTML = table;

// div.innerHTML = table.appendChild(thead);
// table.appendChild(tbody);
// thead.appendChild(head);
// tbody.appendChild(bodyRows);
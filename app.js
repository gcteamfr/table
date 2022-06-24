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
<tr class="scale">
<td id="conseqScale"></td>
<td id="conseqScale"></td>
<td></td>
<td id="conseqScale">None</td>
<td id="conseqScale">Moderate</td>
<td id="conseqScale">Serious</td>
<td id="conseqScale">Major</td>
<td id="conseqScale">Disastrous</td>
</tr>
<tr class="scale">
<td id="conseqScale"></td>
<td id="conseqScale"></td>
<td></td>
<td class="numberScale">1</td>
<td class="numberScale">2</td>
<td class="numberScale">3</td>
<td class="numberScale">4</td>
<td class="numberScale">5</td>
</tr>
<tr>
<td class="probability">Frequent (once a week)</td>
<td class="probaTitle" rowspan="5">Probability</td>
<td class="numberProba">5</td>
<td id="51" class ="cell data"></td>
<td id="52" class ="cell orange"></td>
<td id="53" class ="cell red"></td>
<td id="54" class ="cell red"></td>
<td id="55" class ="cell red"></td>
</tr>
<tr>
<td class="probability">Possible (once 6 months)</td>
<td class="numberProba">4</td>
<td id="41" class ="cell data"></td>
<td id="42" class ="cell data"></td>
<td id="43" class ="cell orange"></td>
<td id="44" class ="cell red"></td>
<td id="45" class ="cell red"></td>
</tr>
<tr>
<td class="probability">Unusual (once 3 years)</td>
<td class="numberProba">3</td>
<td id="31" class ="cell data"></td>
<td id="32" class ="cell data"></td>
<td id="33" class ="cell orange"></td>
<td id="34" class ="cell orange"></td>
<td id="35" class ="cell red"></td>
</tr>
<tr>
<td class="probability">Unlikely (once 10 years)</td>
<td class="numberProba">2</td>
<td id="21" class ="cell data"></td>
<td id="22" class ="cell data"></td>
<td id="23" class ="cell data"></td>
<td id="24" class ="cell data"></td>
<td id="25" class ="cell orange"></td>
</tr>
<tr>
<td class="probability">Highly unlikely (once in career)</td>
<td class="numberProba">1</td>
<td id="11" class =" cell data"></td>
<td id="12" class =" cell data"></td>
<td id="13" class =" cell data"></td>
<td id="14" class =" cell data"></td>
<td id="15" class =" cell data"></td>
</tr>
</tbody>
</table>`;

div.innerHTML = table;

// Number Scale
const scaleOne = document.querySelectorAll('#numScale')[0];
const scaleTwo = document.querySelectorAll('#numScale')[1];
const scaleThree = document.querySelectorAll('#numScale')[2];
const scaleFour = document.querySelectorAll('#numScale')[3];
const scaleFive = document.querySelectorAll('#numScale')[4];

// Number probability
const probaFive = document.querySelectorAll('#numProba')[0];
const probaFour = document.querySelectorAll('#numProba')[1];
const probaThree = document.querySelectorAll('#numProba')[2];
const probaTwo = document.querySelectorAll('#numProba')[3];
const ProbaOne = document.querySelectorAll('#numProba')[4];

// Cells
// Row => from 5 to 1 (up to down).
// Row 5
const cellFirstRowf = document.getElementById('51');
const cellFirstRows = document.getElementById('52');
const cellFirstRowt = document.getElementById('53');
const cellFirstRowfr = document.getElementById('54');
const cellFirstRowfv = document.getElementById('55');

// Row 4
const cellSecondRowf = document.getElementById('41');
const cellSecondRows = document.getElementById('42');
const cellSecondRowt = document.getElementById('43');
const cellSecondRowfr = document.getElementById('44');
const cellSecondRowfv = document.getElementById('45');

//Row 3
const cellThirdRowf = document.getElementById('31');
const cellThirdRows = document.getElementById('32');
const cellThirdRowt = document.getElementById('33');
const cellThirdRowfr = document.getElementById('34');
const cellThirdRowfv = document.getElementById('35');

//Row 2
const cellFourthRowf = document.getElementById('21');
const cellFourthRows = document.getElementById('22');
const cellFourthRowt = document.getElementById('23');
const cellFourthRowfr = document.getElementById('24');
const cellFourthRowfv = document.getElementById('25');

//Row1
const cellFifthRowf = document.getElementById('11');
const cellFifthRows = document.getElementById('12');
const cellFifthRowt = document.getElementById('13');
const cellFifthRowfr = document.getElementById('14');
const cellFifthRowfv = document.getElementById('15');

function cellCase(proba, scale) {
    if ((proba === probaFive) && (scale === scaleOne)) {
        return cellFirstRowf.classList.add('pulse');
    } else
        if (proba === proba5 && scale === scale2) {
            return cell2.classList.add("pulse");

        }
    console.log("2", proba, scale, cell1)
}
cellCase(5, 2);

// const cellules = document.querySelectorAll(".cell");
// let items = Array.from(cellules).map(elem => {
//     return elem.id
// });
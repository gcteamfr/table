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
<td id="numScale" class="numberScale">1</td>
<td  id="numScale" class="numberScale">2</td>
<td  id="numScale" class="numberScale">3</td>
<td  id="numScale" class="numberScale">4</td>
<td  id="numScale" class="numberScale">5</td>
</tr>
<tr>
<td class="probability">Frequent (once a week)</td>
<td class="probaTitle" rowspan="5">Probability</td>
<td id="numProba" class="numberProba">5</td>
<td id="51" class ="cell data"></td>
<td id="52" class ="cell orange"></td>
<td id="53" class ="cell red"></td>
<td id="54" class ="cell red"></td>
<td id="55" class ="cell red"></td>
</tr>
<tr>
<td class="probability">Possible (once 6 months)</td>
<td id="numProba" class="numberProba">4</td>
<td id="41" class ="cell data"></td>
<td id="42" class ="cell data"></td>
<td id="43" class ="cell orange"></td>
<td id="44" class ="cell red"></td>
<td id="45" class ="cell red"></td>
</tr>
<tr>
<td class="probability">Unusual (once 3 years)</td>
<td id="numProba" class="numberProba">3</td>
<td id="31" class ="cell data"></td>
<td id="32" class ="cell data"></td>
<td id="33" class ="cell orange"></td>
<td id="34" class ="cell orange"></td>
<td id="35" class ="cell red"></td>
</tr>
<tr>
<td class="probability">Unlikely (once 10 years)</td>
<td id="numProba" class="numberProba">2</td>
<td id="21" class ="cell data"></td>
<td id="22" class ="cell data"></td>
<td id="23" class ="cell data"></td>
<td id="24" class ="cell data"></td>
<td id="25" class ="cell orange"></td>
</tr>
<tr>
<td class="probability">Highly unlikely (once in career)</td>
<td id="numProba" class="numberProba">1</td>
<td id="11" class =" cell data"></td>
<td id="12" class =" cell data"></td>
<td id="13" class =" cell data"></td>
<td id="14" class =" cell data"></td>
<td id="15" class =" cell data"></td>
</tr>
</tbody>
</table>`;

div.innerHTML = table;

function cellFocus(proba, scale) {
    let intersection = proba + scale;
    let cell = document.getElementById(intersection);
    if (document.querySelectorAll('pulse').length) {
        document.querySelectorAll('pulse')[0].classList.remove('pulse')
    }
    cell.classList.add('pulse');
}

cellFocus(5, 2);
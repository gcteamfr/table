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
<td id="51" class ="data"></td>
<td id="52" class ="orange"></td>
<td id="53" class ="red"></td>
<td id="54" class ="red"></td>
<td id="55" class ="red"></td>
</tr>
<tr>
<td class="probability">Possible (once 6 months)</td>
<td class="numberProba">4</td>
<td id="41" class ="data"></td>
<td id="42" class ="data"></td>
<td id="43" class ="orange"></td>
<td id="44" class ="red"></td>
<td id="45" class ="red"></td>
</tr>
<tr>
<td class="probability">Unusual (once 3 years)</td>
<td class="numberProba">3</td>
<td id="31" class ="data"></td>
<td id="32" class ="data"></td>
<td id="33" class ="orange"></td>
<td id="34" class ="orange"></td>
<td id="35" class ="red"></td>
</tr>
<tr>
<td class="probability">Unlikely (once 10 years)</td>
<td class="numberProba">2</td>
<td id="21" class ="data"></td>
<td id="22" class ="data"></td>
<td id="23" class ="data"></td>
<td id="24" class ="data"></td>
<td id="25" class ="orange"></td>
</tr>
<tr>
<td class="probability">Highly unlikely (once in career)</td>
<td class="numberProba">1</td>
<td id="11" class ="data"></td>
<td id="12" class ="data"></td>
<td id="13" class ="data"></td>
<td id="14" class ="data"></td>
<td id="15" class ="data"></td>
</tr>
</tbody>
</table>`;

div.innerHTML = table;

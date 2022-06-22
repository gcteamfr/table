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
<td id="conseqScale">None</td>
<td id="conseqScale">Moderate</td>
<td id="conseqScale">Serious</td>
<td id="conseqScale">Major</td>
<td id="conseqScale">Disastrous</td>
</tr>
<tr class="scale">
<td id="conseqScale"></td>
<td id="conseqScale"></td>
<td id="conseqScale">1</td>
<td id="conseqScale">2</td>
<td id="conseqScale">3</td>
<td id="conseqScale">4</td>
<td id="conseqScale">5</td>
</tr>
<tr>
<td class="probability">Frequent (once a week)</td>
<td class="probaTitle" rowspan="5">Probability</td>
<td class ="data pulse"></td>
<td class ="data orange pulseo"></td>
<td class ="data red pulser"></td>
<td class ="data red pulser"></td>
<td class ="data red pulser"></td>
</tr>
<tr>
<td class="probability">Possible (once 6 months)</td>
<td class ="data pulse"></td>
<td class ="data pulse"></td>
<td class ="data orange pulseo"></td>
<td class ="data red pulser"></td>
<td class ="data red pulser"></td>
</tr>
<tr>
<td class="probability">Unusual (once 3 years)</td>
<td class ="data pulse"></td>
<td class ="data pulse"></td>
<td class ="data orange pulseo"></td>
<td class ="data orange pulseo"></td>
<td class ="data red pulser"></td>
</tr>
<tr>
<td class="probability">Unlikely (once 10 years)</td>
<td class ="data pulse"></td>
<td class ="data pulse"></td>
<td class ="data pulse"></td>
<td class ="data pulse"></td>
<td class ="data orange pulseo"></td>
</tr>
<tr>
<td class="probability">Highly unlikely (once in career)</td>
<td class ="data pulse"></td>
<td class ="data pulse"></td>
<td class ="data pulse"></td>
<td class ="data pulse"></td>
<td class ="data pulse"></td>
</tr>
</tbody>
</table>`;

div.innerHTML = table;

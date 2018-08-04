/* getting elements form the DOM*/
var pts_ref = document.getElementById("pts_ref");
var pts_eval = document.getElementById("pts_eval");
var t_body = document.getElementById("t_body");
var cpt = 0;

/* updating those elements */
pts_ref.innerText = t_ref.features[0].geometry.coordinates.length;
pts_eval.innerText = t_eval.features[0].geometry.coordinates.length;

t_eval.features[0].geometry.coordinates.forEach(p_eval => {
    t_body.innerHTML = t_body.innerHTML + '<tr><td>' + (cpt+1) + '</td><td> [' + p_eval + '] </td><td>' + error_estimation[cpt] + '</td></tr>';
    cpt++;
});
var turf = require('turf');

/**
 * trajectories_comparison function used to estimat error between
 * two trajectories as parameters :
 * @param {*} t_ref : reference trajectory
 * @param {*} t_eval : evalution trajectory
 */
var trajectories_comparison = function (t_ref,t_eval){
   
    /* e_t_eval_t_ref : buffer to stock result => the shortest distance
    between a dot in the trajectory to evaluat with the reference trajectory */
    var e_t_eval_t_ref = [];

    var i;
    /* for each coordinatewe in the evalution trajectory we will 
    serach for the shortest distance beween this coordiante and 
    the reference trajectory*/
    for (i = 0; i < t_eval.features[0].geometry.coordinates.length; i++) { 
        var p_eval = t_eval.features[0].geometry.coordinates[i];
        
        /* d_p_eval_p_ref : buffer to stock temporary distances between p_eval 
        in the trajectory to evaluat with the reference trajectory */
        var d_p_eval_p_ref = [];
    
        var j;
        /* for each coordinatewe in the reference trajectory we will 
        serach for the distance beween this coordiante and p_eval
        the result will be store in the temporary buffer, the distance 
        is calculated using turf.js library*/
        for (j = 0; j < t_ref.features[0].geometry.coordinates.length; j++) {
            var p_ref = t_ref.features[0].geometry.coordinates[j];
            d_p_eval_p_ref.push(turf.distance(p_eval, p_ref));
        }
        
        /* searching for the shortest distance in the temporary buffer => d_p_eval_p_ref */
        var min_distance = d_p_eval_p_ref.reduce(function(a, b) { return Math.min(a, b); });
    
        /* store the shortest distance in e_t_eval_t_ref*/
        e_t_eval_t_ref.push(min_distance);
    }

    var result = {
        nb_coords_eval: t_eval.features[0].geometry.coordinates.length,
        nb_coords_ref: t_ref.features[0].geometry.coordinates.length,
        eval_coordinates: t_eval.features[0].geometry.coordinates,
        estimation_of_error: e_t_eval_t_ref
      }

    /* return the result of error estimation */
    return result;
}

module.exports = trajectories_comparison;
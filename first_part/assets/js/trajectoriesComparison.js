/**
 * trajectories_comparison function used to estimat error between
 * two trajectories as parameters :
 * @param {*} t_ref : reference trajectory
 * @param {*} t_eval : evalution trajectory
 */
function trajectories_comparison(t_ref,t_eval){
   
    /* e_t_eval_t_ref : buffer to stock result => the shortest distance
    between a dot in the trajectory to evaluat with the reference trajectory */
    var e_t_eval_t_ref = [];

    /* for each coordinatewe in the evalution trajectory we will 
    serach for the shortest distance beween this coordiante and 
    the reference trajectory*/
    t_eval.features[0].geometry.coordinates.forEach(p_eval => {

        /* d_p_eval_p_ref : buffer to stock temporary distances between p_eval 
        in the trajectory to evaluat with the reference trajectory */
        var d_p_eval_p_ref = [];
        
        /* for each coordinatewe in the reference trajectory we will 
        serach for the distance beween this coordiante and p_eval
        the result will be store in the temporary buffer, the distance 
        is calculated using turf.js library*/
        t_ref.features[0].geometry.coordinates.forEach(p_ref => {
            d_p_eval_p_ref.push(turf.distance(p_eval, p_ref));
        });
    
        /* searching for the shortest distance in the temporary buffer => d_p_eval_p_ref */
        var min_distance = d_p_eval_p_ref.reduce(function(a, b) { return Math.min(a, b); });
    
        /* store the shortest distance in e_t_eval_t_ref*/
        e_t_eval_t_ref.push(min_distance);
    });

    /* return the result of error estimation */
    return e_t_eval_t_ref;
}

/* calling the trajectories_comparison function */
var error_estimation = trajectories_comparison(t_ref,t_eval);
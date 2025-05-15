/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){return false;} //Might this even happen? well, just in case
    //Sort both strings
    const s_sorted = s
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .join('');
    const t_sorted = t
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .join('');
    //default size
    const size = s.length;
    //Loop to verify if both strings are the same (as they were sorted)
    for(let i = 0; i < size; i++){
        if(s_sorted[i] !== t_sorted[i]){return false;}
    }
    return true;
};
/*
Note: This solution is not the most efficient, as I should've used hash instead of sorting. Will upload ASAP
*/
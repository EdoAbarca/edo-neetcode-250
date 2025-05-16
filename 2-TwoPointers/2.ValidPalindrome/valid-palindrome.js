/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function preprocessString(s){
        let preprocessedString = "";
        for (char of s){
            if(/^[0-9a-zA-Z]+$/.test(char)){ //Alphanumeric
                preprocessedString+=char.toLowerCase(); //Just in case I meet an upper case char
            }
        }
        return preprocessedString;
    }

    let prep_s = preprocessString(s);
    let right = prep_s.length-1;
    const half = (prep_s.length/2) + (prep_s.length%2);
    for(left = 0; left<half; left++){
        if(prep_s[left] !== prep_s[right]) return false;
        right--;
    }
    return true;
};
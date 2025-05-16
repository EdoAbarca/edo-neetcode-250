/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //Utility function to check if a character is alphanumeric using regex
    function isAlphaNumeric(c) {
        return /[a-z0-9]/i.test(c);
    }
    /** 
    function preprocessString(s){
        let preprocessedString = "";
        for (char of s){
            if(/^[0-9a-zA-Z]+$/.test(char)){ //Alphanumeric
                preprocessedString+=char.toLowerCase(); //Just in case I meet an upper case char
            }
        }
        return preprocessedString;
    }*/

    //let prep_s = preprocessString(s);
    //pointers
    let left = 0;
    let right = s.length-1;
    //const half = (s.length/2) + (s.length%2);
    //Loop over the string until the pointers meet
    while (left < right) {
        //To skip non-alphanumeric characters
        while (left < right && !isAlphaNumeric(s[left])) left++;
        while (left < right && !isAlphaNumeric(s[right])) right--;

        //Palindrome check (toLowerCase() to ignore case)
        //If both chars arent equal, string is not a palindrome
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++;
        right--;
    }
    //At this point, the loop is over, meaning the string is a palindrome
    return true;
};
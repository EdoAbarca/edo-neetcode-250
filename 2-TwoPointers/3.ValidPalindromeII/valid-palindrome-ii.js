//Helper function
function isPalindrome(s,l,r){
    while(l < r){
        if(s[l] !== s[r]) return false;
        l += 1
        r -= 1
    }
    return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length-1;
    while(left < right){
        if(s[left] !== s[right]){
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left+=1;
        right-=1;
    }
    return true;
};
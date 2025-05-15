/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    //Utility variables
    //Rightmost pointer
    let right = s.length-1;
    //Half static pointer, will be used as condition for the loop
    const half = Math.floor(s.length / 2) + (s.length % 2);
    //Loop until half the string to proceed with the swaps, use left pointer as iterator
    for(let left = 0; left<half; left++){
        //swap the current leftmost char with the current rightmost char
        const swapChar = s[right];
        s[right] = s[left];
        s[left] = swapChar;
        //Move rightmost pointer
        right-=1;
    }
};
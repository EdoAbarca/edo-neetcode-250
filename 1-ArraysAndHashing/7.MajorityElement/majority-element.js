/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash = new Map(); //[number, count]
    for (let number of nums){ //Loop to count the numbers in the array
        hash.set(number, (hash.get(number) || 0) + 1)
    }
    //Utility variables
    let majorityNumber = 0; 
    let majorityCount = 0;

    //Let's search the number with the biggest count
    for(let [number, count] of hash){
        if(count > majorityCount){
            majorityNumber = number;
            majorityCount = count;
        }
    }
    //Output
    return majorityNumber;
};
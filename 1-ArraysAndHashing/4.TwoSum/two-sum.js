/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map(); // "Hash" to save values and their respective index
    let output = []; // Output array
    for (let i = 0; i < nums.length; i++) { //Loop to check the input array
        let complement = target - nums[i]; //Number we're looking for, based on the current one
        if (map.has(complement)) { // If that number was previously "hashed", it means the pair has been found
            output = [map.get(complement), i]; // Save the pair solution
            break; // No need to continue the loop, it's purpose was fulfilled already
        }
        map.set(nums[i], i); //Else, save it for a possible later check
    }
    return output; //Return the pair solution (2-elements array)
};
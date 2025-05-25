/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const seen = new Set(); //Keep track of the previous numbers

    //Loop to check the array
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) { //Current array number was in hash -> Duplicate
            return true;
        }

        seen.add(nums[i]); //If not, save the current number

        // Keep the window size at most k
        if (seen.size > k) {
            seen.delete(nums[i - k]);
        }
    }
    //No duplicate was found
    return false;
};
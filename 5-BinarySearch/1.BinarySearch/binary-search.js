/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1; //Pointers

    while (left <= right) { //Loop condition (both meet => Array of just 1 element)
        let mid = Math.floor((left + right) / 2); //Half pointer
        if (nums[mid] === target) return mid; //Target found, pointer (index) returned
        //If not, the array has to be "sliced" (pointers move)
        else if (nums[mid] < target) left = mid + 1; //Gotta look up the right side of the half
        else right = mid - 1; // Gotta look up the left side of the half
    }

    return -1;
};

/** Alternative solution using recursion
function binarySearch(arr, target) {
    if (arr.length === 0) {
        return -1;
    }

    const mid = Math.floor(arr.length / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        // Search left half
        return binarySearch(arr.slice(0, mid), target);
    } else {
        // Search right half
        const result = binarySearch(arr.slice(mid + 1), target);
        return result === -1 ? -1 : mid + 1 + result;
    }
}
 */
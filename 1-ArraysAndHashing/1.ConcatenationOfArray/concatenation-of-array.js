/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    //Simple, straightforward solution
    //let ans = nums.concat(nums);
    //return ans;

    //Elegant, one-liner but discarded for solution
    //for (let i = 0; i < 2*n; i++){
    //    ans[i] = nums[i % n];
    //}
    
    //Less condensed, manual solution
    let ans = []; //Output
    const n = nums.length; //Default input array length

    //First for loop: Copy nums to ans
    //This definitely might be encapsulated in a default JavaScript function...
    for(let i = 0; i < n; i++){
        ans.push(nums[i]);
    }

    //Second for loop: Actually concatenate array
    for(let i = 0; i < n; i++){
        ans.push(nums[i]);
    }
    return ans;
};
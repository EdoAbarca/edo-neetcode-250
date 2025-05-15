var containsDuplicate = function(nums) {
    //Hash DS to save nums data already checked
    //Reduces time complexity from O(n) to O(1) when checking stored data
    let hash = new Set();

    //Loop the nums array
    for(let i = 0; i < nums.length; i++){
        //Hash has current number -> Duplicate -> Return true
        if(hash.has(nums[i])){ 
            return true;
        }
        //If not, save current to the hash and keep looping
        hash.add(nums[i]);
    }
    //To this point, the array was completely checked and no duplicate was found
    //false must be returned
    return false;
};
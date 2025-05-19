const SIZE = 769; //Don't ask why

//Utility function to simulate hashing
const hashing = function(key){
    return key%SIZE;
}

//Class constructor
var MyHashSet = function() {
    this.buckets = [];
    for(let i = 0; i < SIZE; i++){
        this.buckets.push([]);
    }
    //return this.buckets;
};
//METHODS
//ADD
/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const address = hashing(key);
    const bucket = this.buckets[address];
    if (!bucket.includes(key)) {
        bucket.push(key);
    }
};

//REMOVE
/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const address = hashing(key);
    const bucket = this.buckets[address];
    const index = bucket.indexOf(key);
    if (index !== -1) {
        bucket.splice(index, 1);
    }
};

//CONTAINS
/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const address = hashing(key);
    return this.buckets[address].includes(key);
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
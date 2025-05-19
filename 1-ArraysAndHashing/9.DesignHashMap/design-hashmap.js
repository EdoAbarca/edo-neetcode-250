const SIZE = 769; //Don't ask why

//Utility function to simulate hashing
const hashing = function(key){
    return key%SIZE;
}

var MyHashMap = function() {
    this.buckets = [];
    for(let i = 0; i < SIZE; i++){
        this.buckets.push([]);
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const index = hashing(key);
    const bucket = this.buckets[index];
    for (let pair of bucket) {
        if (pair[0] === key) {
            pair[1] = value;
            return;
        }
    }
    bucket.push([key, value]);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const index = hashing(key);
    const bucket = this.buckets[index];
    let value = -1;
    for (let pair of bucket) {
        if (pair[0] === key) {
            value = pair[1];
        }
    }
    return value;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const index = hashing(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            bucket.splice(i, 1);
            return;
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
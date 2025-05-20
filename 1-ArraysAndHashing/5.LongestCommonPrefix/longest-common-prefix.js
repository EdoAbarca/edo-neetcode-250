/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    // Step 1: Find the shortest word
    let shortestWordIndex = 0;
    let shortestWordLength = strs[0].length;

    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shortestWordLength) {
            shortestWordLength = strs[i].length;
            shortestWordIndex = i;
        }
    }

    let prefix = strs[shortestWordIndex];

    // Step 2: Reduce prefix until it matches all words
    while (prefix.length > 0) {
        let allMatch = true;
        for (let str of strs) {
            if (!str.startsWith(prefix)) {
                allMatch = false;
                break;
            }
        }
        if (allMatch) {
            break;
        } else {
            prefix = prefix.slice(0, -1); // Remove last char
        }
    }

    return prefix;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) { return false; } //Might this even happen? well, just in case
  /** 
  //Sort both strings
  const s_sorted = s
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');
  const t_sorted = t
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');
  //default size
  const size = s.length;
  //Loop to verify if both strings are the same (as they were sorted)
  for(let i = 0; i < size; i++){
      if(s_sorted[i] !== t_sorted[i]){return false;}
  }  return true;*/
  /*
Note: This solution is not the most efficient, as I should've used hash instead of sorting. Will upload ASAP
*/
  //Map hash for both strings
  const freqS = new Map();
  const freqT = new Map();

  //Loop over string s to count the frequency of each character
  for (let char of s) {
    //Save frequency of each character in the string
    freqS.set(char, (freqS.get(char) || 0) + 1);
  }

  //Loop over string t to count the frequency of each character
  for (let char of t) {
    //Save frequency of each character in the string
    freqT.set(char, (freqT.get(char) || 0) + 1);
  }

  //Check if both hash data are different (char counts)
  for (let [char, count] of freqS) {
    if (freqT.get(char) !== count) return false;
  }

  //If the loop is over, the strings are anagrams
  return true;
};

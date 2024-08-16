/*
Given an array of strings strs, group all anagrams together into sublists. 
You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, 
but the order of the characters can be different.

Constraints:
#1 <= strs.length <= 1000.
#0 <= strs[i].length <= 100
#strs[i] is made up of lowercase English letters.

*/

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //create a res object to store the anagrams
        const res = {};

        //for loop for all the "strings" in strs
        for( const s of strs){
            //create a 26-digit key for the string to represent every letter
            //fill the array with 0s as a counter starting at 0 for every letter
            //this will ensure accuracy of the key's letter count since the key is 
            //alphabetically organized

            //console.log(s)
            let key = Array(26).fill(0);

            //now we go through the word s in strs and count the letters
            //use charCodeAt for the location of the letter
            for( const char in s){
                //console.log(s[char])
                const charCode = s[char].charCodeAt(0);
                key[charCode - 'a'.charCodeAt(0)]++;
            }

            //join the key together so it's a string
            let code = key.join();

            //then check if the code exists
            if(res[code]){
                //add it to the array of the same code
                res[code].push(s);
            }else{
                //or make the new code in the res and then push the string
                res[code] = [];
                res[code].push(s);
            }

            //console.log(key);
            
        }
        return Object.values(res)
    }

    
}

const strs = ["act","pots","tops","cat","stop","hat"]
const func = new Solution();
console.log(func.groupAnagrams(strs))

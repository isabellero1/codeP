/*
Given two strings s and t, 
return true if the two strings are anagrams of each other, 
otherwise return false.

An anagram is a string that contains the exact same characters 
as another string, but the order of the characters can be different.

>>Constraints:
s and t consist of lowercase English letters.
*/

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        //if they dont have the same length, false
        if(s.length != t.length){
            return false;
        }

        const sLetters = {};
        const tLetters = {};

        for(let i = 0; i < s.length; i++){
            //store string s and t letters into object w/ freq

            if(sLetters[s[i]]){
                //increase freq if letter already exists
                sLetters[s[i]] += 1;
            }else{
                //create if it doesn't exist in obj
                sLetters[s[i]] = 0
            }

            if(sLetters[t[i]]){
                //increase freq if letter already exists
                sLetters[t[i]] += 1;
            }else{
                //create if it doesn't exist in obj
                sLetters[t[i]] = 0
            }
        }

        //compare

        for(const key in sLetters){
            if(sLetters[key] != tLetters[key]){
                return false;
            }
        }

        //if it passes for loop, true
        return true;
    }
}

const s = "jar"
const t = "jam"
const func = new Solution();
console.log(func.isAnagram(s,t))
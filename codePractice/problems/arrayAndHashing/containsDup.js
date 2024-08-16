/*
Given an integer array nums, 
return true if any value appears more than once in the array, 
otherwise return false.
*/


class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    
    hasDuplicate(nums) {
        const dict = {};
        for(let i = 0; i < nums.length; i++){
            //if dict already has the value as a key
            if(dict[nums[i]]){
                //there is a duplicate, so return true
                return true;
            }else{
                //add it to the dict if it does not exist
                dict[nums[i]] = 0;
            }
        }

        //if it finishes the for loop without return true, there are no duplicates
        return false;
    }
}

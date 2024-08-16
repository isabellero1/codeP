/*
Given an array of integers nums and an integer target, 
return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input 
has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

>>Constraints:
# 2 <= nums.length <= 1000
# -10,000,000 <= nums[i] <= 10,000,000
# -10,000,000 <= target <= 10,000,000
*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i = 0; i < nums.length; i++){
            let curr = nums[i];
            //difference -> target- curr
            let diff = target-curr;
            if(nums.includes(diff)){
                let diffInd = nums.indexOf(diff)
                return[i,diffInd];
            }
        }
        return [-1,-1];
    }
}

const nums = [3,4,5,6];
const func = new Solution();
console.log(func.twoSum(nums,7));
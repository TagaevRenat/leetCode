var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let result = target - nums[i]
        if (nums.includes(result) && nums.indexOf(result) !== i) {
            return [nums.indexOf(result), i]
        }
        if ((nums.includes(result) && nums.indexOf(result) == i)) {
            continue
        }
    }
};
console.log(twoSum([5, 12, 1, 8, 5, 3, 2], 10))

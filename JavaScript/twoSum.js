var twoSum = function(nums, target) {
    var numbers = {};
    for(let i=0; i<nums.length; i++){
        let currentNum= nums[i];
        let neededNum = target - currentNum;
        if(neededNum in numbers){
            return [numbers[neededNum], i];
        } else{
            numbers[currentNum] = i
        }
    }
    console.log(numbers)
    return [];
};

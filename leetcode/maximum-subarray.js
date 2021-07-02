
// O(n)
var maxSubArray = function(nums) {
  let localMax = nums[0];
  let globalMax = localMax;
  
  for(let i = 1; i < nums.length; i++) {
      localMax = Math.max(nums[i], localMax + nums[i]);
      globalMax = Math.max(globalMax, localMax);
  }
  
  return maxSoFar;
}

// O(n^2)
var maxSubArrayBruteForce = function(nums) {
  let max = 0;
  for (i = 0; i < array.length; i++) {
      let innerMax = 0;
      for (j = i; j < array.length; j++) {
          innerMax += array[j];       
          max = Math.max(max, innerMax);
      }
  }
  
  return max;
}

// O(n)
var maxSubArrayDp = function(nums) {
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
      if (nums[i - 1] > 0) {
          nums[i] += nums[i - 1];
      }
      maxSum = Math.max(nums[i], maxSum);
  }
  return maxSum;
};
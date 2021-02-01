var singleNumber = function (nums) {
  let Finder = {};

  //creating hashmap and storing each number as key and no of times it occur as value

  for (let i = 0; i < nums.length; i++) {
    if (!Finder[nums[i]]) {
      Finder[nums[i]] = 1;
    } else {
      Finder[nums[i]] += 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (Finder[nums[i]] == 1) {
      return nums[i];
    }
  }
};
singleNumber([2, 2, 1]);

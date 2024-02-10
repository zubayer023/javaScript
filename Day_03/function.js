


function ageCalculate_all(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 == 0) {
            console.log(num, ' is even number');
        } else{
            console.log(num, ' is odd number');
        }
    }
}

nums = [5, 10, 15, 25];
ageCalculate_all(nums);


friends_age = [20, 25, 30, 35, 45];
ageCalculate_all(friends_age);





 



 function myFunction(num) {
    var result;
    if (num % 2 == 0) {
        result = num;
    } else {
        result = num * 2;
    }
    return result;
 }

 var result = myFunction(25);
 
 console.log('result', result);

 function friends_all(nums) {
    var friends_array = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = myFunction(num);
        friends_array.push(result);
    }
    return friends_array;
 }

 var nums = [5, 10, 15, 20, 25];
 var nums_even = friends_all(nums);
 console.log(nums_even);


 


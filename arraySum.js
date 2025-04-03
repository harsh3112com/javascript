function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  }
  
  console.log(sumArray([1, 2, 3, 4, 5])); // 15
  console.log(sumArray([-1, 0, 1])); // 0
function reduceArray(array) {
    'use strict';
    let total = 0;
    // Write code under this line
    
    if (array.length === 0) {
        return 0
    } 
    for (const number of array) {
       total += number
    }
    return total;
  };
  const myArray = []
//   console.log(reduceArray(myArray))
  console.log(reduceArray([1, 2, 3]));
  // 6
  
  //console.log(reduceArray([-2, 0, 2]));
  // 0
  
  //console.log(reduceArray([1, 2, 2.5]));
  // 5.5
  
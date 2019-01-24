function largestOfFour(arr) {
    let newArr = [];
    for(let i = 0 ; i < arr.length; ++i){
      let maxNum = arr[i][0];
      for(let j = 0; j < arr[i].length ; ++j){
        if(arr[i][j] > maxNum){
          maxNum = arr[i][j];      
        }
      }
      newArr.push(maxNum);
    }
    return newArr;
  }
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
  console.log(largest([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
  function largest(arr){
      return arr.map(function(eachArr){
          return eachArr.reduce(function(prev, current){
              return prev > current ? prev : current  
          })
      })
  }
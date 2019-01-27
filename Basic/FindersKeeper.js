function findElement(arr, func) {
    let filteredarr = arr.filter(val => func(val));
    return filteredarr;
  }
  
  console.log(findElement([1, 3, 5, 9, 8, 9, 10], num => num % 2 === 0));

  
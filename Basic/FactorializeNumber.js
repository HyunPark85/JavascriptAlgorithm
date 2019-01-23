function factorialize(num) {
    let newNum = 1;
    for( ; 1 <= num ; --num){
      newNum *= num;
    }
    return newNum;
  }
  
console.log(factorialize(5));
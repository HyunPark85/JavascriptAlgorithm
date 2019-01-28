function palindrome(str) {
  var found = str.match(/\W|_/g);
  let newArr = str.toLowerCase().split("");
  if(found){
    for(let i = 0 ; i < found.length ; ++i){
    newArr.splice(newArr.indexOf(found[i]),1);
    }
  }
    for(let i = 0 , j = newArr.length-1 ; i != j ; ++i, --j){
      if(newArr[i] != newArr[j]){
        return false;
      }
    }
    return true;
  }
  palindrome("five|\_/|four");
  
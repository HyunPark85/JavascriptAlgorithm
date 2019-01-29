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

  function palindrome(str) {
    return str.replace(/[\W_]/g, '').toLowerCase() ===
           str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
  }

//this solution performs at minimum 7x better, at maximum infinitely better.
    //read the explanation for the reason why. I just failed this in an interview.
    function palindrome(str) {
        //assign a front and a back pointer
        let front = 0
        let back = str.length - 1
  
        //back and front pointers won't always meet in the middle, so use (back > front)
        while (back > front) {
          //increments front pointer if current character doesn't meet criteria
          if ( str[front].match(/[\W_]/) ) {
            front++
            continue
          }
          //decrements back pointer if current character doesn't meet criteria
          if ( str[back].match(/[\W_]/) ) {
            back--
            continue
          }
          //finally does the comparison on the current character
          if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
          front++
          back--
        }
  
        //if the whole string has been compared without returning false, it's a palindrome!
        return true
  
      }




palindrome("five|\_/|four");
  
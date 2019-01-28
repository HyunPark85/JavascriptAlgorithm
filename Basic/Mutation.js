function mutation(arr) {
    for(let j = 0 ; j < arr[1].length ; ++j){
     if(arr[0].toLowerCase().indexOf(arr[1][j].toLowerCase()) == -1){
       return false;
     } 
    }
  return true;
}

function mutation(arr) {
    return arr[1].toLowerCase()
      .split('')
      .every(function(letter) {
        return arr[0].toLowerCase()
          .indexOf(letter) != -1;
      });
  }

mutation(["hello", "no"]);
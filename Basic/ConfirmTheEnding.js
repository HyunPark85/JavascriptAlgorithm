function confirmEnding(str, target) {
    return str.substr(str.length-target.length) == target;
  }
  

function confirm(str,target){
    let count = 0;
    for(let i = str.length - target.length, j = 0 ; i < str.length ; ++i, ++j){
        if(str[i] === target[j]){
            ++count;
        }
    }
    return count === target.length;
}


  confirm("Bastian", "n");
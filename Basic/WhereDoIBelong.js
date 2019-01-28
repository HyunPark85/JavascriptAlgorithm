function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
    for (var a = 0; a < arr.length; a++) {
      if (arr[a] >= num)
        return a;
    }  
    return arr.length;
}

function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function(a, b){return a-b});
    return arr.indexOf(num);
}

function getIndexToIns(arr, num) {
    return arr.concat(num).sort((a,b) => a-b).indexOf(num);
}
    
getIndexToIns([1,3,4],2);

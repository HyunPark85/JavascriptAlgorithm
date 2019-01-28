function chunkArrayInGroups(arr, size) {
    // Break it up.
    let newArr = [];
    let length = arr.length;
    for(let fr = 0 ; length > 0 ; fr += size){
      newArr.push(arr.slice(fr,fr+size))
      length -= size;
    }
  return newArr;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
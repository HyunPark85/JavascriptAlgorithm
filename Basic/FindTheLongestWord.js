function findLongestWordLength(str) {
    let longest = 0;
    str.split(" ").forEach(function(word){
      if(word.length > longest){
        longest = word.length;
      }
    });
      return longest;
 }
 
 console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
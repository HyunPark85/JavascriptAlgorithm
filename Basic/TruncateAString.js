function truncateString(str, num) {
    let newStr= "";
    if(str.length <= num){
      return str;
    }
    for(let i = 0 ; i < str.length ; ++i){
      if(i < num){
        newStr += str[i];
      }
    }
    newStr += "...";
    return newStr;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
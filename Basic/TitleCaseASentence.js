function titleCase(str) {
    str = str.toLowerCase().split(" ")
              .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
              .join(" ");
    return str;
  }
  
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
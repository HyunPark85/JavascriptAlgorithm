function rot13(str) { // LBH QVQ VG!
    let arr = "";
    let list = {
        "a" : "n",
        "b" : "o",
        "c" : "p",
        "d" : "q",
        "e" : "r",
        "f" : "s",
        "g" : "t",
        "h" : "u",
        "i" : "v",
        "j" : "w",
        "k" : "x",
        "l" : "y",
        "m" : "z"
    }
    for(let i = 0 ; i < str.length ; ++i){
      if(!str[i].match(/\W|_/g)){
      Object.keys(list).forEach((key)=>{
        if(key === str[i].toLowerCase()){
          arr += list[key];
        }
        if(list[key] === str[i].toLowerCase()){
          arr += key;
        }
      })
      }else{
        arr += str[i];
      }
    }
      return arr.toUpperCase();
    }
    
rot13("SERR YBIR?");
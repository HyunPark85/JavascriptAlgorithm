//using Built-in function
function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("HELLO"));//OLLEH
//using For Loop 
function reverseStr(str){
    let newStr = "";
    for(let i = str.length ; 0 <= i ; --i){
        newStr += str[i]; 
    }
    return newStr;
}
console.log(reverseStr("HELLO")); //undefinedOLLEH
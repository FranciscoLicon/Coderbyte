const codelandUsernameValidation = (str) => { 
    const validLength = str.length >= 4 && str.length <= 25;
    const validStart = /[a-z]/.test(str[0]);
    const validStr = /^[_0-9a-zA-Z]+$/.test(str);
    const validFinal = str[str.length-1] != '_';
    return (validLength && validStart && validStr && validFinal);
    
}
  
// keep this function call here 
console.log(codelandUsernameValidation(readline()));
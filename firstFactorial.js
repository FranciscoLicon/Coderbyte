const firstFactorial = (num) => { 

    return (num === 1 ? 1 : num * firstFactorial(num - 1));
   
}
      
// keep this function call here 
console.log(firstFactorial(readline()));
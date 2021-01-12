const firstReverse = (str) => { 

    let strArr = str.split('');
    let reverse = [];
    
    while(strArr.length > 0){
      reverse.push(strArr.pop());
    }
  
    return reverse.join('');
}
     
// keep this function call here 
console.log(firstReverse(readline()));
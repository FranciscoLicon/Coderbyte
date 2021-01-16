const treeQM = (str) => {
    let strArr = str.split('');
    let numQM = [];
    strArr.forEach(x => {
      if(/[?]/.test(x)){
        numQM.push(x);
      }
    })
    return numQM.length;
  }
  
  const questionsMarks = (str) => { 
      result = false;
      for(let i=0; i<str.length; i++){
          for(let j=i+1; j<str.length; j++){
              if(Number(str[i]) + Number(str[j])=== 10 && treeQM(str.slice(i,j)) === 3){
                  result = true;
                  i = j;
                  continue;
              } else if (Number(str[i]) + Number(str[j])=== 10 && treeQM(str.slice(i,j)) !== 3){
                return false;
              }
          }
      }
      return result;
  }
     
  // keep this function call here 
  questionsMarks(readline());
const FindIntersection = (strArr) => { 
    let arrRes = [];
    let arrA = strArr[0].split(', ');
    let arrB = strArr[1].split(', ');
    for(let i=0; i<arrA.length;i++){
      for(let j=0; j<arrB.length;j++){
        if(arrA[i] === arrB[j]){
          arrRes.push(parseInt(arrA[i]));
        }
      }
    }
    if(arrRes.length > 0){
      return arrRes.join();
    } else {
      return false;
    }
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(readline()));
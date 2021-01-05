const FindIntersection = (strArr) => { 
    let hash = {};
    let arrRes = [];
    const arrA = strArr[0].split(', ');
    const arrB = strArr[1].split(', ');
    
    arrA.forEach(element => {
        hash[element] = true;
    });

    arrB.forEach(element => {
        if(hash[element]){
            arrRes.push(element);
        }
    });
    if(arrRes.length > 0){
        return arrRes.join();
    } else {
        return false;
    }
    
  }
     
  // keep this function call here 
  console.log(FindIntersection(readline()));
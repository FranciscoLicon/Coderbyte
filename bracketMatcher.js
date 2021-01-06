const BracketMatcher = (str) => { 

    const arrAux = str.split('');
    let pair = 0;
    for(let i=0; i<arrAux.length;i++){
      if(arrAux[i]=== '('){
        pair++
      } else if(arrAux[i]===')'){
        pair--;
        if(pair < 0){
          return 0;
        }
      }
    }
    if(pair === 0){
      return 1;
    } else {
      return 0;
    }
  }
     
  // keep this function call here 
  console.log(BracketMatcher(readline()));
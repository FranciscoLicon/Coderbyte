const longestWord = (sen) => { 

    const words = sen.split(' ');
    const realWords = [];
    words.forEach(word => {
      if(/^[0-9a-zA-Z]+$/.test(word)){
        realWords.push(word);
      }
    });
    let longWord = '';
    realWords.forEach(realWord => {
      if(realWord.length > longWord.length){
        longWord = realWord;
      }
    });
    return longWord; 
  
  }
     
// keep this function call here 
console.log(longestWord(readline()));
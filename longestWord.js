const LongestWord = (sen) => { 

    const words = sen.split(' ');
    const realWords = [];
    words.forEach(word => {
      if(/^[0-9a-zA-Z]+$/.test(word)){
        realWords.push(word);
      }
    });
    let longestWord = '';
    realWords.forEach(realWord => {
      if(realWord.length > longestWord.length){
        longestWord = realWord;
      }
    });
    return longestWord; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));
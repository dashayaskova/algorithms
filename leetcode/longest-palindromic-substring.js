// greedy algorithm
// O(n^3)

var longestPalindrome = function(s) {
  const elements = s.split('');
  let maxSubseq = 0;
  let resI = 0;
  let resJ = 0;
  
  for(let i = 0; i < elements.length; i++) {
      let localMax = 0;
      let iPointer = i;
      
      for (let j = elements.length - 1; j >= i; j--) {
          let jPointer = j;
          
          while (iPointer <= jPointer) {
              if(iPointer === jPointer) {
                  localMax++; 
                  break;
              }
              
              if(elements[iPointer] !== elements[jPointer]) {
                 localMax = 0; 

                 break;
              }
              
              localMax+=2;
              iPointer++;
              jPointer--;
          } 
          
          if(maxSubseq < localMax) {
              maxSubseq = localMax;
              resI = i;
              resJ = j;
          }
          
          iPointer = i;
          jPointer = j;
          localMax = 0;
      }
  }
  
  return s.slice(resI, resJ + 1);
};

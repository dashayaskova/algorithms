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


// dynamic programming (bottom-up approach)
// O(n^2)

var longestPalindromeDP = function(s) {
  const size = s.length;

  // matrix with the max palindrome in string between i and j indexes
  const dp = Array.from(Array(size), () => new Array(size).fill(0));

  let res = s[0];
  
  // fill the main diagonal with 1 (because one letter is palindrome)
  for(let i = 0; i < size; i++) {
    dp[i][i] = 1;
  }

  for(let l = 1; l < size; l++) {
    for(let j = l; j < size; j++) {
      let i = j - l;
      
      if(s[i] === s[j] && (dp[i+1][j-1] || l == 1)) {
        dp[i][j] = dp[i+1][j-1] + 2;
      } else {
        dp[i][j] = 0;
      }
      
      if(dp[i][j] > res.length) {
        res = s.slice(i, j + 1);
      }
    }
  }
  
  return res;
};
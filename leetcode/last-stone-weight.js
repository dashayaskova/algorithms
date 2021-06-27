

// 1.
// greedy algorithm
// O(n^2)

var lastStoneWeight = function(stones) {

  while(stones.length > 1) {
    let [ maxIndex, prevMaxIndex ] = stones[0] > stones[1] ? [0, 1] : [1, 0];

    for(let i = 2; i < stones.length; i++) {
      if(stones[maxIndex] < stones[i]) {
        prevMaxIndex = maxIndex;
        maxIndex = i;
      } else if(stones[prevMaxIndex] < stones[i]) {
        prevMaxIndex = i;
      }
    }

    const maxEl = stones[maxIndex];
    const prevMaxEl = stones[prevMaxIndex];
  
    stones.splice(Math.max(maxIndex, prevMaxIndex), 1)[0];
    stones.splice(Math.min(maxIndex, prevMaxIndex), 1)[0];

    if(maxEl !== prevMaxEl) {
      stones.push(maxEl - prevMaxEl);
    }
  }
    
  return stones[0] || 0;
};

console.log(lastStoneWeight([4,3,4,3,2]));
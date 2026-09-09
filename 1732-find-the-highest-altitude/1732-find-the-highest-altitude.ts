function largestAltitude(gain: number[]): number {
  let max = 0;
  let temp = 0;
  for(let i of gain){
    temp += i
    if(temp > max) max = temp
  }  
  return max
};
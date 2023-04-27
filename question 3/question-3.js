 export function isPerfectSquare(num) {
  const sqrt = Math.sqrt(num);
  const floor =  Math.floor(sqrt);
  if(sqrt === floor){
      console.log(floor)
      return floor
  }
  else {
      console.log("Number is not a perfect square")
      return;
  }
}

//other way to find the perfect sqaure 
// without any predefined method
 export function isPerfectSquare2(num) {
  for (let i = 0; i <= num; i++) {
    if (i * i === num) {
      console.log(i)
      return;
    }
    if(i*i >num){
      break;
    }
  }
  console.log("Number is not a perfect square")
  return;
}
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arry,val){
  return [val, ...arry];
}

function destructivelyAddElementToBeginningOfArray(arry,val){
  const v2 = val;
  return arry.unshift(v2);
}
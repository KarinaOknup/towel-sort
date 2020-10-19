
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr=[];
    if(Array.isArray(matrix)===false || matrix.length===0) return [];
    arr= arr.concat(matrix[0]);
    for(let n=1; matrix.length>n ;n++){
    let x=matrix[n];
    if(n%2!=0) x.reverse();
    arr=arr.concat(x);
    }
    return arr;
}

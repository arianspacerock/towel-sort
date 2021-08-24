
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];

  if (arguments.length===0 || matrix.length === 0) return result;

  for (let index = 0; index < matrix.length; index++) {
      if (index % 2 === 0) {
          result.push(...matrix[index]);
      } else {
        result.push(...matrix[index].sort((a,b)=>b-a))
      }
  }

  return result;
};

// 6 Kyu Problem - October 24th 2022
// Multiplication table
// .push(), nested for loop, Math

/*
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function(size) {
  let ans = []
  for(let i = 0; i < size; i++){
    ans[i] = []
    for(let j = 0; j < size; j++){
      ans[i][j] = (j+1) * (i+1)
    }
  }
  return ans
}

multiplicationTable = function(size) {
  let ans = []
  for(let i = 0; i < size; i++){
    let subArr = []
    for(let j = 0; j < size; j++){
      subArr.push((j+1) * (i+1))
    }
    ans.push(subArr)
  }
  return ans
}

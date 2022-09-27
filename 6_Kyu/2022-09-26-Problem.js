// 6 Kyu Problem - September 26th 2022
// Your order, please
// str.match(regexp), .sort(), .join(), .split(), Nested For Loop, .indexOf(), .push()


/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

// Nested For Loop, .split(), .indexOf(), .push(), .join()
function order(words){
    let arr = words.split(" ")
    let sortedArr = []
    for(let i = 1; i <= arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j].indexOf(i) !== -1){
                sortedArr.push(arr[j])
            }
        }
    }
    return sortedArr.join(" ")
}

// .sort(), .split(), str.match(regexp), .sort(), .join()
function order(words){
  return words.split(" ").sort((a,b) => a.match(/\d/) - b.match(/\d/)).join(" ")
}
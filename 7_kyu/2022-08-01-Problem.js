// 7 Kyu Problem - August 1st 2022
// Odd-Even String Sort
// .split(), .filter(), .join(), for loop

/*
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'

S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'
*/

function sortMyString(S){
    let x = "", y = ""
    for(let i = 0; i < S.length; i++){
        i % 2 === 0 ? x.push(S[i]) : y.push(S[i]) 
    }
    return x + " " + y
}

// Alternative Solution
function sortMyString(S){
    let x = S.split("").filter((e,i) => i % 2 === 0).join("")
    let y = S.split("").filter((e,i) => i % 2 !== 0).join("")
    return x + " " + y
}
// 8 Kyu Problem - April 15th, 2022
// How good are you really?

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!.


function betterThanAverage(classPoints, yourPoints) {
    let classAvg = classPoints.reduce((acc, curr) => acc + curr, yourPoints)/(classPoints.length + 1);
    return yourPoints > classAvg ? true : false;
}

// Alternative Answer:
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}
// 6 Kyu Problem - December 29th 2022
// Compare Versions
// .split(), .map(), Number(), for loop, Math.max(), .shift(), continue statement

/*
Karan's company makes software that provides different features based on the version of operating system of the user.

For finding which version is more recent, Karan uses the following method:

function compareVersions (version1, version2) {
  return parseFloat(version1) >= parseFloat(version2);
}
While this function worked for OS versions 10.6, 10.7, 10.8 and 10.9, the Operating system company just released OS version 10.10.

Karan's function fails for the new version:

compareVersions ("10.9", "10.10");       // returns true, while it should return false
Karan now wants to spend some time to write a more robust version comparison function that works for any future version/sub-version updates.

Help Karan write this function. Here are a few sample cases:

compareVersions("11", "10");                    // returns true
compareVersions("11", "11");                    // returns true
compareVersions("10.4.6", "10.4");              // returns true
compareVersions("10.4", "11");                  // returns false
compareVersions("10.4", "10.10");               // returns false
compareVersions("10.4.9", "10.5");              // returns false
It can be assumed that version strings are non empty and only contain numeric literals and the character '.'.
*/

// array[i] and there isnt an element at index i, will return undefined
function compareVersions (version1, version2) {

    let v1Arr = version1.split(".").map(Number)
    let v2Arr = version2.split(".").map(Number)
    
    let largestLength = Math.max(v1Arr.length, v2Arr.length)
    
    for(let i = 0; i < largestLength; i++){
      if(v1Arr[i] == undefined && v2Arr[i]){
        return false
      }
      if(v1Arr[i] > v2Arr[i]){
        return true
      }
      if(v1Arr[i] < v2Arr[i]){
        return false
      }
    }

    return true
}

// Alternate Version
// using continue statement
const compareVersions = (v1, v2) => {
    const a1 = v1.split('.').map(Number);
    const a2 = v2.split('.').map(Number);
    for (let i = 0; i < Math.max(a1.length, a2.length); i++) {
      let n1 = a1[i] || 0, n2 = a2[i] || 0;
      if (n1 === n2) continue;
      return (n1 > n2) ? true : false;
    }
    return true;
};

// Alternate Version
// using .shift()
function compareVersions (version1, version2) {
    version1 = version1.split('.')
    version2 = version2.split('.')

    while (version1.length && version2.length) {
      const ver1 = Number(version1.shift())
      const ver2 = Number(version2.shift())
      
      if (ver1 !== ver2) {
        return ver1 > ver2
      }
    }
    return version2.length === 0
}
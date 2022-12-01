// 6 Kyu Problem - November 30th 2022
// Let's Recycle!
// for of loop, for in loop, objects, .push(), OR, if statements, .forEach(), .push(), .map(), .filter()

/*
You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

Notes
The bins should come in the same order as the materials listed above
All bins should be listed in the output, even if some of them are empty
If an object is made of two materials, its type should be listed in both of the respective bins
The order of the type's in each bin should be the same as the order of their respective objects was in the input list
Example
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
*/


// for of loop, for in loop, objects, .push()
function recycle(array) {
  // paper, glass, organic, plastic
  
  let objectBin = {
    "paper" : [],
    "glass" : [],
    "organic" : [],
    "plastic" : []
  }
  
  for(let obj of array){
    objectBin[obj["material"]].push(obj["type"])
    if(obj["secondMaterial"]) objectBin[obj["secondMaterial"]].push(obj["type"])
  }
  
  let ans = []
  
  for(let obj in objectBin){
    ans.push(objectBin[obj])
  }

  return ans
}

// OR, if statements, .forEach(), .push()
function recycle(arr) {
    let paper = [], glass = [], organic = [], plastic = [];
  
    arr.forEach(obj => {  
      if(obj.material === 'paper' || obj.secondMaterial === 'paper' ) paper.push(obj.type)
      if(obj.material === 'glass' || obj.secondMaterial === 'glass') glass.push(obj.type)
      if(obj.material === 'organic' || obj.secondMaterial === 'organic') organic.push(obj.type)
      if(obj.material === 'plastic' || obj.secondMaterial === 'plastic') plastic.push(obj.type)
    });
  
    return [paper, glass, organic, plastic]
  }

// .map(); .filter(); filtering for the objects, in the array of objects, that's material property is the same as the original array element
// then .map() for the type of each filtered object
const recyclerMaterials = ['paper', 'glass', 'organic', 'plastic'];
function recycle(objects) {
  return recyclerMaterials.map(m => objects.filter(o => o.material == m || o.secondMaterial == m).map(o => o.type));
}

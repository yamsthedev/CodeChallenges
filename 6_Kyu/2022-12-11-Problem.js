// 6 Kyu Problem - December 11th 2022
// Maze Runner
// .findIndex(func), .includes(), .indexOf(), nested loops

/*
Introduction
Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
Task
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
..with the following key

      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point
  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
Rules
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost.
*/

function mazeRunner(maze, directions) {
  let curX, curY;
  for (var i = 0; i < maze.length; i++) {
    for (var j = 0; j < maze[i].length; j++) {
      if (maze[i][j] == 2) {
        curX = j;
        curY = i;
      }
    }
  }
  
  for (var i = 0; i < directions.length; i++) {
    if (directions[i] == 'N') curY--;
    if (directions[i] == 'S') curY++;
    if (directions[i] == 'W') curX--;
    if (directions[i] == 'E') curX++;
    
    if (!maze[curY]) return 'Dead';
    if (maze[curY][curX] == 3) return 'Finish';
    if (maze[curY][curX] == undefined || maze[curY][curX] == 1) return 'Dead';
  }
  return 'Lost';
}

// using .indexOf()
for (let i = 0; i < maze.length; i++){
    if (maze[i].indexOf(2) != -1){
        y = i;
        x = maze[i].indexOf(2);
    }
}   

// using .findIndex(func), .includes(), .indexOf()
function mazeRunner(maze, dirs) {
  var y = maze.findIndex(arr => arr.includes(2));
  var x = maze[y].indexOf(2);
  var curPos;
  for (var i = 0; i < dirs.length; i++) {
    if (dirs[i] === 'N') y--;
    if (dirs[i] === 'S') y++;
    if (dirs[i] === 'W') x--;
    if (dirs[i] === 'E') x++;
    if (!maze[y]) return 'Dead';
    curPos = maze[y][x];
    if (curPos === 3) return 'Finish';
    if (curPos === 1 || curPos === undefined) return 'Dead';
  }
  return 'Lost';
}
/* eslint-disable no-undef */
const recursion = {
  test(num) {
    if(num === 0) {
      console.log('Hello');
    }
    console.log(num);
    test(num - 1);
  },

  countingSheep(num) {
    if(num === 0) {
      return console.log('All sheep jumped over the fence');
    }
    console.log(num+': Another sheep jumps over the fence');
    countingSheep(num - 1);
  },

  powerCalculator(base, n) {
    if(n <= 0) {
      return 'power must be greater than 0';
    }
    if(n === 1) {
      return base;
    } 
    return base * powerCalculator(base, n-1);
  },

  reverseString(string) {
    if(string === '') {
      return '';
    }
    const newString = string[string.length-1];
    return newString + reverseString(string.substring(0, string.length - 1)); 
  },

  triangularNum(num) {
    if(num === 1) {
      return 1;
    }
    return num + triangularNum(num - 1);
  },

  stringSplitter(string, split, insert='', newArray = []) {
    if(string === '') {
      newArray = [...newArray, insert];
      return newArray;
    }
    if(string[0] === split) {
      newArray = [...newArray, insert];
      insert = '';
      return stringSplitter(string.slice(1), split, insert, newArray);
    }
    insert = insert.concat(string[0]);
    stringSplitter(string.slice(1), split, insert, newArray);
  },

  fibonacci(num) { 
    if (num === 0){
      return 0;
    } 
    
    if(num ===1 ){
      return 1;
    }

    return fibonacci(num - 1)+fibonacci(num - 2);
  },

  factorial(num) {
    if(num==0){
      return 1;
    }
    return num * factorial(num-1);
  },

  Maze(x,y){
    let maze = [
      [' ', ' ', ' ', '*', ' ', ' ', ' '],
      ['*', '*', ' ', '*', ' ', '*', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', '*', '*', '*', '*', '*', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', 'e']
    ];

    if(maze[x][y] == 'e'){
      return 'Made it out';
    }

    // if(maze[x+1][y] == ' '){
    //   console.log('D');
    //   return 'D' + Maze(x+1,y);
    // }

    if(maze[x][y+1] == ' '){
      console.log('R');
      return 'R' + Maze(x,y+1);
    }

    // if(maze[x-1][y] == ' '){
    //   console.log('U');
    //   return 'U' + Maze(x-1,y);
    // }

    if(maze[x][y-1] == ' '){
      console.log('L');
      return 'L' + Maze(x,y-1);
    }

  },

  anagrams(string) {
    let variations = null;
    let results = [];
    let a = null; 
    let b = null;

    if(string.length == 1){
      results.push(string)
      return results
    }

    for(let i = 0; i < string.length; i++) {
      a = string[i]
      b = string.substring(0,i) + string.substring (i+1);
      variations = anagrams(b);

      for(let x = 0; x<variations.lenth; x++){
        results.push(a+variations[x])
      }
      return results
    }



  },

  binaryRep(num) {
    if(num === 0) {
      return '';
    }
    let binary = num%2;
    return binaryRep(Math.floor(num/2)) + binary;
  }
};

module.exports = recursion;
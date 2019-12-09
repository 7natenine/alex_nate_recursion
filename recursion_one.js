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

  binaryRep(num) {
    if(num === 0) {
      return '';
    }
    let binary = num%2;
    return binaryRep(Math.floor(num/2)) + binary;
  }
};

module.exports = recursion;
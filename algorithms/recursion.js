function sumArrayOfNums(arr, index=0, sum=0){
  if(index === arr.length){
    return sum
  }
  sum+=arr[index]
  return sumArrayOfNums(arr, index+1, sum);
}

let array = [2,4,5,8]


// Here’s what sumArrayOfNums() would look like with a helper function:

function sumArrayOfNums(arr){
    let index = 0;
    let sum = 0;
    // Notice the lack of parameters in rSum!
    function rSum(){
      if(index === arr.length){
        return sum;
      }
      sum += arr[index];
      index++;
      return rSum();
    }
    // Once you’ve defined the helper function, make sure you call it!
    return rSum();
  }









  // Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){
  // This function returns the largest number in a given array.
  if(arr.length === 1){
    return arr[0]
  } else if(arr[0] < arr[1]){
    arr.shift();
  } else if(arr[0] > arr[1]){
    arr.splice(1,1)
  }
  return findMax(arr)
}

function factorial(number){
  // This function returns the factorial of a given number.
  let checkNumber = 1;
  let factorialNumbers = [];
  function checkNum(){
    if(checkNumber === number){
      return factorialNumbers;
    }
    if(number % checkNumber === 0){
      factorialNumbers.push(checkNumber)
    }
    checkNumber+=1
    return checkNum();
  }
  return checkNum();
}

function fibonacci(n){
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
  let num, index
  let num1 = 1;
  let num2 = 1;
  function checkNum(){
    if(n === index){
      return num
    }
    if(n === 0){
      return 0
    }
    if(n === 1){
      return 1;
    } else {
      return checkNum(n-1) + checkNum(n-2)
    }
  }
  return checkNum()
}

function fibonacci(n){
  if(n === 0){
    return 0;
  }
  if(n === 1){
    return 1;
  } else {
    return fibonacci(n-1)+fibonacci(n-2);
  }
}



function coinFlips(){
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations(){
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}
// Test Script below, DO NOT TOUCH 

mocha.setup('bdd');
const expect = chai.expect;

describe('findMax', ()=>{
  it('should find the largest number in an array', ()=>{
      let testArray = [3,4,2,1,2];
      expect(findMax(testArray)).to.equal(4);
  });
  it('should work for negative numbers', ()=>{
      let testNegatives = [-1, -4, -2];
      expect(findMax(testNegatives)).to.equal(-1);
  });
})

describe('factorial', ()=>{
  it('should accurately calculate factorials', ()=>{
      expect(factorial(3)).to.equal(6);
      expect(factorial(5)).to.equal(120);
  });
})

describe('fibonacci', ()=>{
  it('should accurately return base cases', ()=>{
      expect(fibonacci(1)).to.equal(1);
      expect(fibonacci(2)).to.equal(1);
  });
  it('should accurately calculate subsequent numbers', ()=>{
      expect(fibonacci(3)).to.equal(2);
      expect(fibonacci(4)).to.equal(3);
      for(let i = 3; i < 10; i++){
          expect(fibonacci(i)).to.equal(fibonacci(i-1)+fibonacci(i-2));
      }
  });
})

describe('coinFlips', ()=>{
  it('should return an array', ()=>{
      expect(Array.isArray(coinFlips(2))).to.equal(true);
  });
  it("should include all possibilities", ()=>{
      let results = coinFlips(4);
      expect(results.includes("HHHH")).to.equal(true);
      expect(results.includes("HTHT")).to.equal(true);
      expect(results.includes("TTTT")).to.equal(true);
      expect(results.length).to.equal(16);
  });
})

describe('letterCombinations', ()=>{
  it("should return an array", ()=>{
      expect(Array.isArray(letterCombinations(["a","b","c"]))).to.equal(true);
  });
  it("should include single letter results", ()=>{
      expect(letterCombinations(["a","b","c"]).includes("b")).to.equal(true);
  });
  it("should include combinations in different order", ()=>{
      expect(letterCombinations(["a","b","c"]).includes("ba")).to.equal(true);
      expect(letterCombinations(["a","b","c"]).includes("ab")).to.equal(true);
  });
  it("should include full-length combinations", ()=>{
      expect(letterCombinations(["a","b","c"]).includes("bac")).to.equal(true);
      expect(letterCombinations(["a","b","c"]).includes("cab")).to.equal(true);
  });
})

mocha.run()
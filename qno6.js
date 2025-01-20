
function findMax(numbers) {

  if (numbers.length === 0) {
      return null; 
  }


  let max = numbers[0];
  
     for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
          max = numbers[i];
      }
  }

  return max;
}


const numbers = [2,56,68,100,2,3];
console.log("Maximum value:", findMax(numbers)); 

const nullArray = [];
console.log("Maximum value in empty array:", findMax(nullArray)); 
// Program to print all even numbers from 1 to 50

// Function to check if a number is even
function isEven(number) {
  // A number is even if it is divisible by 2 with no remainder
  return number % 2 === 0;
}

// Loop through numbers from 1 to 50
for (let i = 1; i <= 50; i++) {
  // Check if the current number is even
  if (isEven(i)) {
      // Print the even number to the console
      console.log(i);
  }
}
